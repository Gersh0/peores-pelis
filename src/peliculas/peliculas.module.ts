import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { Director } from 'src/directores/entities/director.entity';

@Module({
  controllers: [PeliculasController],
  providers: [PeliculasService],
  exports: [],
  imports : [TypeOrmModule.forFeature([Pelicula, Director])],
})
export class PeliculasModule {}
