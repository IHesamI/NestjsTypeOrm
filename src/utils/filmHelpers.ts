import Language from "src/films/entities/language.entity";
import { EntityManager } from "typeorm";

export async function findFilmIds(languages: string[], manager: EntityManager) {
    const languageIds = languages.map((lang) => manager.findOne(Language, {
        where: { name: lang },
    }));
    return (await (Promise.all(languageIds)));
}