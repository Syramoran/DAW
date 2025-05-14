import { PreguntaEntity } from 'src/entities/pregunta.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity('encuestas')
export class Encuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo_respuesta: string;

  @Column()
  codigo_resultados: string;

  @OneToMany(() => PreguntaEntity, (pregunta) => pregunta.encuesta, {
    cascade: ['insert'],
  })
  preguntas: PreguntaEntity[];
}
