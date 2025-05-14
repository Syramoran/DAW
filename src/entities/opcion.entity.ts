import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { PreguntaEntity } from "./pregunta.entity";
import { Exclude } from "class-transformer";


@Entity('opciones')
export class OpcionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    texto: string;
    @Column()
    numero: number;

    @ManyToOne(() => PreguntaEntity)
    @JoinColumn({ name: 'id_pregunta' })
    @Exclude()
    pregunta: PreguntaEntity;
}