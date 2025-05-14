import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { TipoRespuesta } from './tipo-respuesta.enum';
import { Encuesta } from './encuesta.entity';
import { Exclude } from 'class-transformer';
import { OpcionEntity } from './opcion.entity';
@Entity('pregunta')
export class PreguntaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numero: number;

    @Column()
    texto: string;

    @Column({
        type: 'enum',
        enum: TipoRespuesta
    }) tipo: TipoRespuesta;

    // @ManyToOne(() => Encuesta, (encuesta) => encuesta.preguntas, {onDelete: 'CASCADE',})
    // encuesta: Encuesta;


    @ManyToOne(() => Encuesta)
    @JoinColumn({ name: 'id_encuesta' })
    @Exclude()
    encuesta: Encuesta;

    @OneToMany(() => OpcionEntity, (opcion) => opcion.pregunta, {
        cascade: ['insert']})
    opciones: OpcionEntity[];
}

//expliacion relacion
// () => Encuesta | ¿Con qué clase se relaciona? → con la clase Encuesta
// (encuesta) => encuesta.preguntas | ¿Qué propiedad de la clase Encuesta se relaciona? → con la propiedad preguntas
