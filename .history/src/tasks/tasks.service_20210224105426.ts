import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';


@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TasksService)
        private taskRepository: TaskRepository
    ) { }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public getTasksWithFilters(getTaskFilterDto: GetTasksFilterDto) {
        const { status, search } = getTaskFilterDto;

        let tasks = this.getTasks();
        tasks = tasks.filter(t => ((status && t.status === status) || !status) &&
            (t.title.includes(search) || t.description.includes(search)));
        return tasks;
    }

    public async getTaskByID(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Task with id:${id} not found!!`);
        }

        return found;
    }

    public deleteTaskByID(id: string): void {
        console.log(`[TaskService][deleteTaskById] id: ${id}`);
        const index = this.tasks.findIndex(t => t.id === id);

        if (index < 0) {
            throw new NotFoundException(`Task: ${id} not found`);
        }

        this.tasks.splice(index, 1);
    }

    public async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(create)
    }

    public updateTaskStatus(id: string, status: TaskStatus): Task {
        const index = this.tasks.findIndex(t => t.id === id);
        this.tasks[index].status = status;
        return this.tasks[index];
    }
}
