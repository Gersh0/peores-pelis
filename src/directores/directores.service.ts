import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { Director } from './entities/director.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DirectoresService {
  constructor(
    @InjectRepository(Director) private readonly directorRepository: Repository<Director>,
   ) {}

  async create(createDirectorDto: CreateDirectorDto) {
    const director = this.directorRepository.create(createDirectorDto);
    await this.directorRepository.save(director);
    return director;
  }

  async findAll() {
    const directores = await this.directorRepository.find({ relations: ['peoresPeliculas'] });
    return directores;
  }

  async findOne(id: string) {
    const director = await this.directorRepository.findOne({
      where: { id },
      relations: ['peoresPeliculas'],
    });
    return director;
  }

  async update(id: string, updateDirectorDto: UpdateDirectorDto) {
    const director = await this.directorRepository.preload({
      id: id,
      ...updateDirectorDto,
    });
    if (!director) {
      throw new Error('Director no encontrado');
    }
    return this.directorRepository.save(director);
  }

  remove(id: string) { //arreglar mejor
    if (!this.directorRepository.delete(id)) {
      throw new BadRequestException('Director no encontrado');
    }

    //Check first if director has any movies
    const director = this.directorRepository.findOne({where:{ id }, relations: ['peoresPeliculas'] });
    if (director) {
      throw new BadRequestException('Director tiene peliculas asociadas');
    }
    return this.directorRepository.delete(id);
  }
}
