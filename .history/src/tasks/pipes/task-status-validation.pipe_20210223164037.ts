import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform {

    read
    transform(value: any, metadata: ArgumentMetadata) {
        return value;
    }

}