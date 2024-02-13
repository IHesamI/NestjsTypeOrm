import { ColumnNumericTransformer } from "src/utils/NumericTransformer";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity('languages')
export class Language {
    @PrimaryGeneratedColumn()
    language_id: number;

    @Column({ type: 'varchar', length: '45' })
    name: string;

    @Column()
    last_update: Date;

}

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


    // @Column({ type: "smallint" })
    // language_id: number;

    @ManyToMany(() => Language)
    @JoinColumn({referencedColumnName:'language_id'})
    languages: Language

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





