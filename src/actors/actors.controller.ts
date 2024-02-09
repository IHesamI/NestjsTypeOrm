import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
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

  @Get()
  async findAll() {
    return await this.actorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return this.actorsService.update(+id, updateActorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actorsService.remove(+id);
  }
}
