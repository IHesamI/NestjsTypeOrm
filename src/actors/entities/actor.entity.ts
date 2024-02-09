import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
export class Actors extends BaseActors {
    @Column({ type: 'timestamp without time zone' })
    last_update: Date
}

@Entity('actors_info')
export class Actors_info extends BaseActors {
    @Column({ type: 'text' })
    film_info: string
}