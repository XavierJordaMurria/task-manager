import { BaseEntity, Entity } from "typeorm";

@Entity()
export class Task extends BaseEntity {

    @Primary
    id: number;
}