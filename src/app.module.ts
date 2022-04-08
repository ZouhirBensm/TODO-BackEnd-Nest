import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

// To Change
import { TodoService } from './todo/todo.service';
import { TodosController } from './todos/todos.controller';

// Metadata used to organize the application structure.
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'vectorsolv',
      // Entities files contain our ORM entities that will be mapped to SQL tables by TypeORM
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // If true, It tells TypeORM to automatically sync the database tables with the entities each time you run the app. This is helpful in development but not recommended in production
      synchronize: true,
      // cache: false
    }),
    TypeOrmModule.forFeature([Todo]),
  ],
  // To Change
  controllers: [AppController, TodosController],
  providers: [AppService, TodoService],
})
export class AppModule {}
