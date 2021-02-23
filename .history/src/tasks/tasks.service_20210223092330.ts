import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    public getAllTasks(): Task[] {
        return this.tasks;
    }

    public createTask(title: string, description: string) {
        const task: Task = {
            title,
            description,
            status: TaskStatus.OPEN
        }
    }
}
