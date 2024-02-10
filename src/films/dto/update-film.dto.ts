import { PartialType } from '@nestjs/mapped-types';
import { UpdateFilmType } from './create-film.dto';

export class updateFilmDto extends PartialType(UpdateFilmType) {}
