import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stat } from 'fs';
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

    public async getTasks( getTaskFiletrDto: GetTasksFilterDto): Task[] {
        return this.tasks;
    }


    public async getTaskByID(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Task with id:${id} not found!!`);
        }

        return found;
    }

    public async deleteTaskByID(id: number): Promise<void> {
        console.log(`[TaskService][deleteTaskById] id: ${id}`);
        const res = await this.taskRepository.delete(id);

        if (res.affected === 0) {
            throw new NotFoundException(`Task with id:${id} not found!!`);
        }

    }

    public async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }

    public async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
        const task = await this.getTaskByID(id);
        task.status = status;
        await task.save();
        return task;
    }
}
