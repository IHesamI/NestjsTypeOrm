import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, Film } from './entities/film.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Film, Category])],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule { }
