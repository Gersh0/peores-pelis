import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { Repository } from 'typeorm';
import { Director } from '../directores/entities/director.entity';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Pelicula) private readonly peliculaRepository: Repository<Pelicula>,
    @InjectRepository(Director) private readonly directorRepository: Repository<Director>,
  ) { }

    async create(createPeliculaDto: CreatePeliculaDto) {
    try {
      const director = await this.directorRepository.findOne({ where: { id: createPeliculaDto.directorId } });
      if (!director) {
        throw new BadRequestException('Director no encontrado');
      }
      const pelicula = this.peliculaRepository.create({ ...createPeliculaDto, director });
      await this.peliculaRepository.save(pelicula);
      return pelicula;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    const peliculas = await this.peliculaRepository.find({ relations: ['director'] });
    return peliculas.map(pelicula => ({
      ...pelicula,
      director: pelicula.director.nombre
    }));
  }

  async findOne(id: string) {
    console.log(id);
    const pelicula = await this.peliculaRepository.findOne({ where: { id }, relations: ['director'] });
    return {
      ...pelicula,
      director: pelicula.director.nombre
    };
  }

  async findMoviesByDirectorId(id: string) {
    const director = await this.directorRepository.findOne({ where: { id }, relations: ['peoresPeliculas'] });
    return director.peoresPeliculas;
  }

  async update(id: string, updatePeliculaDto: UpdatePeliculaDto) {
    const director = await this.directorRepository.findOne({ where: { id: updatePeliculaDto.directorId } });
    return director.peoresPeliculas;
  }

  remove(id: string) {
    return this.peliculaRepository.delete(id);
  }
}
