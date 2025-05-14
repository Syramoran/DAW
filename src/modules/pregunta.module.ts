import { Module } from '@nestjs/common';
import { PreguntaService } from '../services/pregunta.service';
import { PreguntaController } from '../controllers/pregunta.controller';

@Module({
  controllers: [PreguntaController],
  providers: [PreguntaService],
})
export class PreguntaModule {}
