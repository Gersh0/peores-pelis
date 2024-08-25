import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateDirectorDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  fechaNacimiento: Date;

  @IsNotEmpty()
  @IsString()
  nacionalidad: string;

  @IsNotEmpty()
  @IsString()
  biografia: string;
}
