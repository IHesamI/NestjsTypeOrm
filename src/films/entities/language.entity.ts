import { Column, Entity, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import { Film } from "./film.entity";

@Entity('languages')
export default class Language {
    @PrimaryGeneratedColumn()
    language_id: number;

    @Column({ type: 'varchar', length: '45' })
    name: string;

    @Column()
    last_update: Date;

    @OneToMany(() => Film, film => film.language)
    films: Film;
}
