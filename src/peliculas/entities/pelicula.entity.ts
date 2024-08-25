import { Director } from "src/directores/entities/director.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pelicula {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    titulo: string;
  
    @Column()
    anioLanzamiento: number;
  
    @Column()
    genero: string;
  
    @Column()
    descripcion: string;
  
    @ManyToOne(
      () => Director, 
      director => director.peoresPeliculas,
    )
    director: Director;
  }