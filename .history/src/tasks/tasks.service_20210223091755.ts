import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks: Task = [];

    public getAllTasks() {
        return this.tasks;
    }
}
