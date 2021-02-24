import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform {

    readonly allowedStatuses = Object.keys(Task)
    transform(value: any, metadata: ArgumentMetadata) {
        return value;
    }

}