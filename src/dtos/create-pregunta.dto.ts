import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TipoRespuesta } from "../entities/tipo-respuesta.enum";
export class CreatePreguntaDto {
    @IsNotEmpty()
    @IsString()
    texto: string;

    @IsNotEmpty()
    @IsEnum(TipoRespuesta)
    tipo: TipoRespuesta;

    @IsNotEmpty()
    @IsNumber()
    numero : number;

    @IsNotEmpty()
    @IsNumber()
    id_encuesta : number;
}
