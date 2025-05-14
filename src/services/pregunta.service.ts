import { Injectable } from '@nestjs/common';
import { CreatePreguntaDto } from '../dtos/create-pregunta.dto';


@Injectable()
export class PreguntaService {
  create(createPreguntaDto: CreatePreguntaDto) {
    return 'This action adds a new pregunta';
  }

  findAll() {
    return `This action returns all pregunta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pregunta`;
  }

}
