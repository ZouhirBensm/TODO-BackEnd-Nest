import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { TodoService } from './../todo/todo.service';

@Controller()
export class TodosController {

    constructor(private todoService: TodoService) {
        
    }
    @Get()
    read(@Query() query: string): Promise<Todo[]> {
        console.log(Object.values(query)[0])
        const search = Object.values(query)[0]
        return this.todoService.readAll(search);
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
