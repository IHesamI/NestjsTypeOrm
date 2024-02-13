import { Injectable } from '@nestjs/common';
import { CreateFilmDto, LangsCreateDto } from './dto/create-film.dto';
import { updateFilmDto } from './dto/update-film.dto';
import { DataSource } from 'typeorm';
import { Film } from './entities/film.entity';
import Language from './entities/language.entity';
import { cateogryBuilder, saveCategories } from 'src/utils/CategoryBuilder';
import { findFilmIds } from 'src/utils/filmHelpers';
@Injectable()
export class FilmsService {

  constructor(private datasource: DataSource) { }

  async create(createFilmDto: CreateFilmDto) {
    const { categories, languages: languagesString } = createFilmDto;
    const categoriesEntities = cateogryBuilder(categories, this.datasource.manager);
    const languages = await findFilmIds(languagesString, this.datasource.manager);
    console.error(languages);

    const movie = this.datasource.manager.create(Film, {
      ...createFilmDto,
      categories: categoriesEntities,
      languages,
      last_update: (new Date()).toISOString()
    });
    await this.datasource.manager.save(movie);
  }

  async createLang(language: LangsCreateDto) {
    const { name } = language;
    const languageEntity = this.datasource.manager.create(Language, {
      name,
      last_update: (new Date()).toISOString(),
    })
    await this.datasource.manager.save(languageEntity);
    return true;
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
