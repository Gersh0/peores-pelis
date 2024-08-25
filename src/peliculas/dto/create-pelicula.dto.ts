import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreatePeliculaDto { 
    @IsNotEmpty()
    @IsString()
    titulo: string;
  
    @IsNotEmpty()
    @IsNumber()
    anioLanzamiento: number;
  
    @IsNotEmpty()
    @IsString()
    genero: string;
  
    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsUUID()
    directorId: string;
  }
