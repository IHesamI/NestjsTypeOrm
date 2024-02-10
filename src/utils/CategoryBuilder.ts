import { Category } from "src/films/entities/film.entity";
import { EntityManager } from "typeorm";

export function cateogryBuilder(categories: string[], manager: EntityManager): Category[] {
    return categories.map((category) => manager.create(Category, {
        name: category,
        last_update: (new Date()).toISOString()
    })
    );
}

export function saveCategories(categories: Category[], manager: EntityManager) {
    const promises = categories.map(category => manager.save(category))
    return Promise.all(promises);
}
export function catBuilder(categories: string[]) {
    return categories.map(category => {
        const categoryEntity = new Category()
        categoryEntity.name = category
        categoryEntity.last_update = new Date()
        return categoryEntity;
    })
}