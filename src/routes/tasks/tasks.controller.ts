import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
    constructor(
        private readonly tasksService: TasksService,
    ){}

    @Post("/")
    async createTask() {
        return await this.tasksService.createTask();
    }

    @Get("/")
    async getTasks() {
        return await this.tasksService.getTasks();
    }

    @Put("/")
    async updateTask() {
        return await this.tasksService.updateTask();
    }

    @Delete("/")
    async deleteTask() {
        return await this.tasksService.deleteTask();
    }

    @Post("/retry")
    async retryTask() {
        return await this.tasksService.retryTask();
    }
}
