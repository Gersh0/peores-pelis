import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { CreateDirectorDto } from "src/directores/dto/create-director.dto";

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