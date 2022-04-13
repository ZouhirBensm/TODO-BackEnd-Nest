import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult, Like } from 'typeorm';
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

    async  readAll(search: string): Promise<Todo[]> {
        // console.log(term, Object.keys(term))
        if (search){
            // Query 
            return await this.todoRepository.find({ where: { title: Like(`%${search}%`) } });

        } else {
            return await this.todoRepository.find();
        }
    }

    async  readTodo(id): Promise<Todo[]> {
        // console.log(term, Object.keys(term))
        return await this.todoRepository.find({ where: { id: id } });
    }

    // async update(todo: Todo): Promise<UpdateResult> {

    //     return await this.todoRepository.update(todo.id, todo);
    // }

    async changeToDone(todo: Todo): Promise<UpdateResult> {
        return await this.todoRepository.update(todo.id, todo);
    }

    async changeStatusTitle(todo: Todo): Promise<UpdateResult> {
        return await this.todoRepository.update(todo.id, todo);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.todoRepository.delete(id);
    }
}
