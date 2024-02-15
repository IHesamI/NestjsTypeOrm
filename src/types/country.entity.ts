import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city.entity";

@Entity('countries')
export class Country {
    @PrimaryGeneratedColumn()
    country_id: Number;

    @Column({ type: 'varchar', length: '100' })
    country: string;

    @OneToMany(() => City, city => city.country)
    cities: City;

    @Column({ type: 'time without time zone' })
    last_update: Date;

}