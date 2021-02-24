import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @cl
    title: string;
}