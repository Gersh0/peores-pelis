import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { Director } from 'src/directores/entities/director.entity';
import { Pelicula } from 'src/peliculas/entities/pelicula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Director, Pelicula])],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
