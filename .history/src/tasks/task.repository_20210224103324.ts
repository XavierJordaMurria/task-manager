import { EntityRepository, Repository } from "typeorm";

@EntityRepository()
export class TaskRepository extends Repository<Task> {

}