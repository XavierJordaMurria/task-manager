import { IsIn, IsOptional } from "class-validator";
import { TaskStatus } from "../task.model";

export class GetTasksFilterDto {

    @IsOptional()
    @IsIn(Object.values(TaskStatus))
    status: TaskStatus;
    
    @IsOptional()
    search: string;
}