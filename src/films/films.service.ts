import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { updateFilmDto } from './dto/update-film.dto';
import { DataSource } from 'typeorm';
import { Film } from './entities/film.entity';
import { cateogryBuilder, saveCategories } from 'src/utils/CategoryBuilder';
@Injectable()
export class FilmsService {

  constructor(private datasource: DataSource) { }

  async create(createFilmDto: CreateFilmDto) {

    const { categories } = createFilmDto;
    const categoriesEntities = cateogryBuilder(categories, this.datasource.manager);
    // await saveCategories(categoriesEntities, this.datasource.manager);

    const movie = this.datasource.manager.create(Film, {
      ...createFilmDto,
      categories: categoriesEntities,
      last_update: (new Date()).toISOString()
    });

    await this.datasource.manager.save(movie);

  }

  async findAll() {
    return await this.datasource.manager.find(Film, {
      relations: {
        categories: true
      }
    });
  }

  findOne(id: number) {
    return this.datasource.manager.findOneBy(Film, { film_id: id });
  }

  async update(id: number, updateFilmDto: updateFilmDto) {
    return await this.datasource.manager.update(Film, { film_id: id }, updateFilmDto);
  }

  async remove(id: number) {
    return await this.datasource.manager.delete(Film, { film_id: id });
  }
}
