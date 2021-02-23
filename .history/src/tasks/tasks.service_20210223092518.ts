import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid} from 'uuid';


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
            id: 
            status: TaskStatus.OPEN
        }
    }
}
