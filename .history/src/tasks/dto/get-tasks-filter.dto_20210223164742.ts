import { IsOptional } from "class-validator";
import { TaskStatus } from "../task.model";

export class GetTasksFilterDto {

    @IsOptional()
    status: TaskStatus;
    search: string;
}