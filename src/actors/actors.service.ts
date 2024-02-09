import { Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { DataSource } from 'typeorm';
import { Actors } from './entities/actor.entity';

@Injectable()
export class ActorsService {

  constructor(private dataSource: DataSource) { }

  create(createActorDto: CreateActorDto) {
    try {
      const { last_name, first_name } = createActorDto;
      console.error(last_name, first_name);
      const last_update = new Date().toISOString();
      this.dataSource.manager
        .createQueryBuilder()
        .insert()
        .into(Actors)
        .values({
          last_name,
          first_name,
          last_update,
        })
        .execute();

      return true;
    } catch {
      throw new Error('internal server erorr');
    }

  }

  findAll(): Promise<Actors[]> {
    return this.dataSource.manager.find(Actors);
  }

  findOne(id: number) {
    return `This action returns a #${id} actor`;
  }

  update(id: number, updateActorDto: UpdateActorDto) {
    return `This action updates a #${id} actor`;
  }

  remove(id: number) {
    return `This action removes a #${id} actor`;
  }
}
