import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Query } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { Response } from 'express';

@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) { }

  @Post()
  create(@Body() createActorDto: CreateActorDto, @Res() res: Response) {
    try {
      this.actorsService.create(createActorDto);
      res.status(HttpStatus.CREATED).send();
      return;
    } catch {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
      return;
    }
  }

  // @Get('/:id')
  // async findbyId(@Param('id') id: string) {
  //   console.error('here in findbyid');

  //   return await this.actorsService.findAll();
  // }

  @Get('/')
  async findAll(@Query('id') id: string) {
    if (id) {
      return await this.actorsService.findById(+id);
    }

    else {

      return await this.actorsService.findAll();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actorsService.findById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return await this.actorsService.update(+id, updateActorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.actorsService.remove(+id);
  }
}
