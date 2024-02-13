import { IsEmail, IsNotEmpty } from "class-validator";
import { Category } from "../entities/film.entity";

export class CreateFilmDto {
    title: string;
    descriptions: string;
    release_year: number;
    language_id: number;
    rental_duration: number;
    rental_rate: number;
    @IsNotEmpty()
    length: number;
    replacement_cost: number;
    rating: string;
    last_update: Date;
    special_feature: string[]
    fulltext: string;
    categories: string[]
}
export class UpdateFilmType {
    title: string;
    descriptions: string;
    release_year: number;
    language_id: number;
    rental_duration: number;
    rental_rate: number;
    length: number;
    replacement_cost: number;
    rating: string;
    last_update: Date;
    special_feature: string[]
    fulltext: string;
    categories: Category[]
}
