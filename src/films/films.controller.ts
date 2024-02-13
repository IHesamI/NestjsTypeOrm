import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto,LangsCreateDto } from './dto/create-film.dto';
import { updateFilmDto } from './dto/update-film.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) { }

  @Post()
  create(@Body() createFilmDto: CreateFilmDto,) {
    return this.filmsService.create(createFilmDto);
  }

  @Post(':language')
  createLangs(@Body() createFilmDto: LangsCreateDto,) {
    return this.filmsService.createLang(createFilmDto);
  }

  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.filmsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: updateFilmDto) {
    return this.filmsService.update(+id, updateFilmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmsService.remove(+id);
  }
}
