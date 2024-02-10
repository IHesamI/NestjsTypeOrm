import { Category } from "src/films/entities/film.entity";
import { EntityManager } from "typeorm";

export async function cateogryBuilder(categories: string[], manager: EntityManager): Promise<Category[]> {
    const promsies = categories.map(async (category) => manager.create(Category, {
        name: category,
        last_update: (new Date()).toISOString()
    })
    );
    return Promise.all(promsies);
}