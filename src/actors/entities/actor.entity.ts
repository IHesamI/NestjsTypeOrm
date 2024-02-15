import { Film } from "src/films/entities/film.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('actors')
export class BaseActors {
    @PrimaryGeneratedColumn()
    actor_id: number
    @Column({ type: 'varchar', length: 45 })
    first_name: string

    @Column({ type: 'varchar', length: 45 })
    last_name: string
}

@Entity('actors')
export class Actor extends BaseActors {
    @Column({ type: 'timestamp without time zone' })
    last_update: Date

    @ManyToMany(() => Film,)
    @JoinTable({
        name: 'film_actors',
        joinColumn: { name: 'actor_id', referencedColumnName: 'actor_id' },
        inverseJoinColumn: { name: 'film_id', referencedColumnName: 'film_id' },
    })
    film: Film

}

@Entity('actors_info')
export class Actors_info extends BaseActors {
    @Column({ type: 'text' })
    film_info: string
}