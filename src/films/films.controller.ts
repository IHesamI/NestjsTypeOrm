import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Res, HttpStatus } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { updateFilmDto } from './dto/update-film.dto';
import { Autheticator } from 'src/utils/authDecorators';
import { Response } from 'express';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) { }

  @Post()
  @Autheticator() 
  create(@Body() createFilmDto: CreateFilmDto,@Res() res:Response) {
    // return this.filmsService.create(createFilmDto);
    console.error('iam in the create',res);
    res.status(HttpStatus.OK).send();
    return;
  }

  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
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
