import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {

    constructor() {}

    async createTask() {
        return "Task created";
    }
    async getTasks() {
        return "Tasks retrieved";
    }
    async updateTask() {
        return "Task updated";
    }
    async deleteTask() {
        return "Task deleted";
    }
    async retryTask() {
        return "Task retried";
    }
}
