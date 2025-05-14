import { Controller, Get, Post, Body, Param,} from '@nestjs/common';
import { EncuestaService } from '../services/encuesta.service';
import { CreateEncuestaDto } from '../dtos/create-encuesta.dto';

@Controller('encuesta')
export class EncuestaController {
  constructor(private readonly encuestaService: EncuestaService) {}

  @Post() // ruta para crear una encuesta /encuesta POST
  create(@Body() createEncuestaDto: CreateEncuestaDto) {
    return this.encuestaService.create(createEncuestaDto);
  }
  // @Body Le dice a NestJS: "extraé el cuerpo del request (JSON) y convertílo a este DTO"
  // createEncuestaDto Declara que el body debe cumplir con la estructura del DTO CreateEncuestaDto (con sus validaciones)

  @Get()
  findAll() {
    return this.encuestaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encuestaService.findOne(+id);
  }
}
