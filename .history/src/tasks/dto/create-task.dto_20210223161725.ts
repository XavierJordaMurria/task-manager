import { IsNotEmpty } from 'class-validator';
export class CreateTaskDto {
    @isNotEmpty()
    title: string;

    @isNotEmpty()
    description: string;
}