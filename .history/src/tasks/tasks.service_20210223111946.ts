import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';


@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    public getTasks(): Task[] {
        return this.tasks;
    }

    public getTasksWithFilters(getTaskFilterDto: GetTasksFilterDto) {
        const {status, search} = getTaskFilterDto;

        let tasks = this.getAl
        return this.tasks;
    }

    public getTaskByID(id: string): Task {
        return this.tasks.find(t => t.id === id);
    }

    public deleteTaskByID(id: string): void {
        this.tasks = this.tasks.filter(t => t.id !== id);
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

    public updateTaskStatus(id: string, status: TaskStatus): Task {
        const index = this.tasks.findIndex(t => t.id === id);
        this.tasks[index].status = status;
        return this.tasks[index];
    }
}
