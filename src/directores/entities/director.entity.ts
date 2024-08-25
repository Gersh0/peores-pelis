import { Pelicula } from 'src/peliculas/entities/pelicula.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Director {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'nombre', nullable: false})
  nombre: string;

  @Column({name: 'fechaNacimiento', nullable: false})
  fechaNacimiento: Date;

  @Column({name: 'nacionalidad', nullable: false})
  nacionalidad: string;

  @Column({name: 'biografia', nullable: false})
  biografia: string;

  @OneToMany(
    () => Pelicula, 
    pelicula => pelicula.director
  )
  peoresPeliculas: Pelicula[];
}

