import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task.model";

export class TaskStatusValidationPipe implements PipeTransform {

    readonly allowedStatuses = Object.values(TaskStatus);
    
    transform(value: any, metadata: ArgumentMetadata) {
        return value;
    }

}