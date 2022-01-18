import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(@Body() body): Task {
        const title = body['title']
        const description = body['description']
        return this.tasksService.createTask(title, description)
    }
}
