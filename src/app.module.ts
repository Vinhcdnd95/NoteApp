import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteModule } from './note/note.module';
import { Note } from './note/entities/note.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Vinh@123456',
      database: 'appNote',
      entities: [Note],
      synchronize: true,
    }),
    NoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
