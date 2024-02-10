import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { DataSource } from 'typeorm';
import { Film } from './entities/film.entity';
import { cateogryBuilder } from 'src/utils/CategoryBuilder';
@Injectable()
export class FilmsService {

  constructor(private datasource: DataSource) { }

  async create(createFilmDto: CreateFilmDto) {

    const categories = createFilmDto.categories;
    const categoriesEntities = await cateogryBuilder(categories, this.datasource.manager);
    const movie = this.datasource.manager.create(Film, { ...createFilmDto, categories: categoriesEntities });
    console.error(movie);
    
    await this.datasource.manager.save(movie);

  }

  findAll() {
    return `This action returns all films`;
  }

  findOne(id: number) {
    return `This action returns a #${id} film`;
  }

  update(id: number, updateFilmDto: UpdateFilmDto) {
    return `This action updates a #${id} film`;
  }

  remove(id: number) {
    return `This action removes a #${id} film`;
  }
}
