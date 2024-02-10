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
      const last_update = new Date().toISOString();
      const actor = this.dataSource.manager
        .create(Actors, {
          last_name,
          first_name,
          last_update,
        });
      this.dataSource.manager.save(actor);
      return true;
    } catch {
      throw new Error('internal server erorr');
    }

  }

  findAll(): Promise<Actors[]> {
    return this.dataSource.manager.find(Actors);
  }

  async findById(id: number) {
    const result = await this.dataSource.manager
      .findOneBy(Actors, {
        actor_id: id
      });
    return result;
  }

  update(id: number, updateActorDto: UpdateActorDto) {
    return this.dataSource.manager
      .update(Actors, { actor_id: id }, updateActorDto);

  }

  remove(id: number) {
    return this.dataSource.manager.delete(Actors, { actor_id: id });
  }
}
