import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Director } from 'src/directores/entities/director.entity';

@Controller('peliculas')
export class PeliculasController {
  constructor(
    private readonly peliculasService: PeliculasService,
  ) { }

    @Post()
  create(@Body() createPeliculaDto: CreatePeliculaDto) {
    return this.peliculasService.create(createPeliculaDto);
  }

  @Get()
  findAll() {
    return this.peliculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peliculasService.findOne(id);
  }

  @Get('director/:id')
  findMoviesByDirectorId(@Param('id') id: string) {
    return this.peliculasService.findMoviesByDirectorId(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeliculaDto: UpdatePeliculaDto) {
    return this.peliculasService.update(id, updatePeliculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peliculasService.remove(id);
  }
}
