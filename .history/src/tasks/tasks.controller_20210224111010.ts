import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) { }

    @Get()
    getTasks(@Query(ValidationPipe) getTaskFiletrDto: GetTasksFilterDto): Task[] {
        if (Object.keys(getTaskFiletrDto).length){
            return this.taskService.getTasksWithFilters(getTaskFiletrDto);
        }
        else {
            return this.taskService.getTasks();
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.taskService.createTask(createTaskDto);
    }

    @Get('/:id')
    getTaskByID(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.taskService.getTaskByID(id);
    }

    @Delete('/:id')
    deleteTaskByID(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.taskService.deleteTaskByID(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id: string, @Body('status', TaskStatusValidationPipe) status: TaskStatus): Task {
        return this.taskService.updateTaskStatus(id, status);
    }
}
