import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PreguntaService } from '../services/pregunta.service';
import { CreatePreguntaDto } from '../dtos/create-pregunta.dto';

@Controller('pregunta')
export class PreguntaController {
  constructor(private readonly preguntaService: PreguntaService) {}

  @Post()
  create(@Body() createPreguntaDto: CreatePreguntaDto) {
    return this.preguntaService.create(createPreguntaDto);
  }

  @Get()
  findAll() {
    return this.preguntaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preguntaService.findOne(+id);
  }
}
