import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid} from 'uuid';


@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    public getAllTasks(): Task[] {
        return this.tasks;
    }

    public createTask(createTaskDto: CreateTaskDto) {
        const task: Task = {
            title: createTaskDto.title,
            description,
            id: uuid(),
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);

        return task;
    }
}
