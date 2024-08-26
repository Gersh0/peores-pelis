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
    try {
      const pelicula = await this.peliculaRepository.findOne({ where: { id }, relations: ['director'] });
      if (!pelicula) {
        throw new BadRequestException('Pelicula no encontrada');
      }
      return {
        ...pelicula,
        director: pelicula.director.nombre
      };
    } catch (error) {
      throw error;
    }
  }

  async findMoviesByDirectorId(id: string) {
    try {
      const director = await this.directorRepository.findOne({ where: { id }, relations: ['peoresPeliculas'] });
      if (!director) {
        throw new BadRequestException('Director no encontrado');
      }
      return director.peoresPeliculas;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updatePeliculaDto: UpdatePeliculaDto) {
    try {
      const director = await this.directorRepository.findOne({ where: { id: updatePeliculaDto.directorId } });
      if (!director) {
        throw new BadRequestException('Director no encontrado');
      }
      const pelicula = await this.peliculaRepository.preload({
        id: id,
        ...updatePeliculaDto,
        director,
      });
      if (!pelicula) {
        throw new BadRequestException('Pelicula no encontrada');
      }
      return this.peliculaRepository.save(pelicula);
    } catch (error) {
      throw error;
    }
  }

  remove(id: string) {
    return this.peliculaRepository.delete(id);
  }
}
