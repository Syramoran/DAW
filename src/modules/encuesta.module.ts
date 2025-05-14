import { Module } from '@nestjs/common';
import { EncuestaService } from '../services/encuesta.service';
import { EncuestaController } from '../controllers/encuesta.controller';

@Module({
  controllers: [EncuestaController],
  providers: [EncuestaService],
})
export class EncuestaModule {}
