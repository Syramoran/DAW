import { IsNotEmpty, IsString } from "class-validator";


export class CreateEncuestaDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

}
