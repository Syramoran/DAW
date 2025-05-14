import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Encuesta } from '../entities/encuesta.entity';
import { CreateEncuestaDto } from '../dtos/create-encuesta.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EncuestaService {
  constructor(
    @InjectRepository(Encuesta) private readonly encuestaRepository: Repository<Encuesta>,
  ) { }

  // Método asíncrono que recibe los datos de la encuesta y devuelve una encuesta guardada
  async create(createEncuestaDto: CreateEncuestaDto): Promise<Encuesta> {

    // Crea una instancia de encuesta con los datos recibidos
    const encuestaData = this.encuestaRepository.create({
      ...createEncuestaDto,              // copia el nombre desde el DTO
      codigo_respuesta: uuidv4(),       // genera un código único para responder
      codigo_resultados: uuidv4(),      // genera un código único para ver resultados
    });

    // Guarda la encuesta en la base de datos y la devuelve
    return this.encuestaRepository.save(encuestaData);
  }


  async findAll(): Promise<Encuesta[]> {
    return await this.encuestaRepository.find(); // es como hacer SELECT * FROM encuestas;
  }

  async findOne(id: number): Promise<Encuesta> {
    const encuestaData = await this.encuestaRepository.findOneBy({ id });
    if (!encuestaData) {
      throw new Error('Encuesta no encontrada');
    }
    return encuestaData;
  }
}
