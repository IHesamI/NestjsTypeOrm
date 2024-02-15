import { Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { DataSource } from 'typeorm';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorsService {

  constructor(private dataSource: DataSource) { }

  create(createActorDto: CreateActorDto) {
    try {
      const { last_name, first_name } = createActorDto;
      const last_update = new Date().toISOString();
      const actor = this.dataSource.manager
        .create(Actor, {
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

  findAll(): Promise<Actor[]> {
    return this.dataSource.manager.find(Actor);
  }

  async findById(id: number) {
    const result = await this.dataSource.manager
      .findOneBy(Actor, {
        actor_id: id
      });
    return result;
  }

  update(id: number, updateActorDto: UpdateActorDto) {
    return this.dataSource.manager
      .update(Actor, { actor_id: id }, updateActorDto);

  }

  remove(id: number) {
    return this.dataSource.manager.delete(Actor, { actor_id: id });
  }
}
