import { isNotEmpty } from 'class-validator';
export class CreateTaskDto {
    title: string;
    description: string;
}