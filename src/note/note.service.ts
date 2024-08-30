import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) { }

  async create(createNoteDto: CreateNoteDto) {
    return this.notesRepository.save(createNoteDto);
  }

  async findAll(): Promise<Note[]> {
    return this.notesRepository.find();
  }

  async findOne(id: number): Promise<Note | null> {
    return this.notesRepository.findOneBy({ id });
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    try {
      await this.notesRepository.update(id, updateNoteDto);
      return this.notesRepository.findOneBy({ id });
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<void> {
    await this.notesRepository.delete(id);
  }
}
