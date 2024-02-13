import { ColumnNumericTransformer } from "src/utils/NumericTransformer";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Language from "./language.entity";

@Entity('films')
export class Film {
    @PrimaryGeneratedColumn()
    film_id: number;

    @Column({ type: "varchar", length: 255 })
    title: string;

    @Column({ type: 'text' })
    descriptions: string;

    @Column({ type: 'int' })
    release_year: number;


    @ManyToOne(() => Language, (language) => language.films)
    language: Language;

    @Column({ type: "smallint" })
    rental_duration: number;

    @Column({
        precision: 4,
        scale: 2,
        type: 'numeric',
        transformer: new ColumnNumericTransformer()
    })
    rental_rate: number;

    @Column({ type: 'smallint' })
    length: number;

    @Column({
        precision: 5,
        scale: 2,
        type: 'numeric',
        transformer: new ColumnNumericTransformer()
    })
    replacement_cost: number;

    @Column({ type: 'varchar', length: 15 })
    rating: string;

    @Column({ type: 'timestamp without time zone' })
    last_update: Date;

    @Column({ type: 'text', array: true })
    special_features: string[];

    @Column({ type: 'tsvector' })
    fulltext: string;

    @ManyToMany(() => Category,
        {
            cascade: true
        }
    )
    @JoinTable({ name: 'films_categories' })
    categories: Category[]

    // @ManyToMany(() => Language,)
    // @JoinTable()
    // languages: Language
}



@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    category_id: number

    @Column({ type: 'varchar', length: 25 })
    name: string

    @Column({ type: "timestamp without time zone" })
    last_update: Date;

}





