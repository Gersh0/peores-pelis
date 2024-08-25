import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasModule } from './peliculas/peliculas.module';
import { DirectoresModule } from './directores/directores.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from './directores/entities/director.entity';
import { Pelicula } from './peliculas/entities/pelicula.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Director, Pelicula],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PeliculasModule, 
    DirectoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
