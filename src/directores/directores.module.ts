import { Module } from '@nestjs/common';
import { DirectoresService } from './directores.service';
import { DirectoresController } from './directores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from './entities/director.entity';

@Module({
  controllers: [DirectoresController],
  providers: [DirectoresService],
  exports: [],
  imports : [TypeOrmModule.forFeature([Director])]
})
export class DirectoresModule {}
