import { Injectable } from '@nestjs/common';
import { task } from './task.model';

@Injectable()
export class TasksService {
    private tasks: task[] = [];

    public getAllTasks() {
        return this.tasks;
    }
}
