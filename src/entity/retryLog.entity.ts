import { Column, Entity, ManyToOne } from "typeorm";
import { GlobalEntity } from "./global.entity";
import { Task } from "./task.entity";

@Entity()
export class RetryTaskLog extends GlobalEntity {

  @Column({nullable: true})
  errorMessage: string;

  @Column({nullable: true})
  retryDate: Date;

  @ManyToOne(()=>Task, (task) => task.retryLogs)
  task: Task;

}