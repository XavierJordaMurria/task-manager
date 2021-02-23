import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';


@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    public getAllTasks(): Task[] {
        return this.tasks;
    }

    public getTaskByID(id: string): Task {
        return this.tasks.find(t => t.id === id);
    }

    public deleteTaskByID(id: string): Task {
        this.tasks.find(t => t.id === id);
    }

    public createTask(createTaskDto: CreateTaskDto) {
        const task: Task = {
            title: createTaskDto.title,
            description: createTaskDto.description,
            id: uuid(),
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);

        return task;
    }
}
