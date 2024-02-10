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

export function catBuilder(categories: string[]) {
    return categories.map(category => {
        const categoryEntity = new Category()
        categoryEntity.name = category
        categoryEntity.last_update = new Date()
        return categoryEntity;
    })
}