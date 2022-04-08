import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { TodoService } from './../todo/todo.service';

@Controller('todos')
export class TodosController {

    constructor(private todoService: TodoService) {
        
    }
    @Get()
    read(): Promise<Todo[]> {
        return this.todoService.readAll();
    }

    @Post('create')
    async create(@Body() todo: Todo): Promise<any> {
        return this.todoService.create(todo);
    }

    // @Put(':id/update')
    // async update(@Param('id') id, @Body() todo: Todo): Promise<any> {
    //     todo.id = Number(id);
    //     return this.todoService.update(todo);
    // }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.todoService.delete(id);
    }
}