import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task.model";

export class TaskStatusValidationPipe implements PipeTransform {

    readonly allowedStatuses = Object.values(TaskStatus);

    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUppercase();

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`Invalid status: ${value}`);
        }
        
        return value;
    }

    private isStatusValid(status): boolean {
        return this.allowedStatuses.some(a => a === status);
    }

}