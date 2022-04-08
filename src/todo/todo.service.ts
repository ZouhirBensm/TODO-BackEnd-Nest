import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>
    ) { }

    async create(todo: Todo): Promise<Todo> {
        return await this.todoRepository.save(todo);
    }

    async  readAll(): Promise<Todo[]> {
        return await this.todoRepository.find();
    }

    // async update(todo: Todo): Promise<UpdateResult> {

    //     return await this.todoRepository.update(todo.id, todo);
    // }

    async delete(id): Promise<DeleteResult> {
        return await this.todoRepository.delete(id);
    }
}
