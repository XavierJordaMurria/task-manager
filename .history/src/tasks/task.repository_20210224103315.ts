import { Repository } from "typeorm";

@Repository()
export class TaskRepository extends Repository<Task> {

}