import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsController } from './actors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actors } from './entities/actor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Actors])],
  controllers: [ActorsController],
  providers: [ActorsService],
})
export class ActorsModule { }
