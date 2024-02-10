export class CreateFilmDto {
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
    categories: string[]
}


// class Category {
//     name: string;
// }