import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Director } from 'src/directores/entities/director.entity';
import { Pelicula } from 'src/peliculas/entities/pelicula.entity';
import { Repository } from 'typeorm';
import { directoresSeed } from './data/directores.seed';
import { peliculasSeed } from './data/pelicula.seed';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Director)
    private readonly directorRepository: Repository<Director>,
    @InjectRepository(Pelicula)
    private readonly peliculaRepository: Repository<Pelicula>,
  ) {}
  
  async executeSeed() {
    await this.peliculaRepository.delete({});
    await this.directorRepository.delete({});

    await this.directorRepository.save(directoresSeed);
    console.log('Directores seed ejecutado');
    await this.peliculaRepository.save(peliculasSeed);
    console.log('Peliculas seed ejecutado');

    return 'Seed ejecutada';
  }
}
