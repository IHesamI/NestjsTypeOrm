import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./country.entity";
import { Address } from "./address.entity";

@Entity('cities')
export class City {
    @PrimaryGeneratedColumn()
    city_id: Number;

    @Column({ type: 'varchar', length: '100' })
    city: string;

    @ManyToOne(() => Country, country => country.cities)
    @JoinColumn({ name: "country_id" })
    country: Country;

    @OneToMany(() => Address, address => address.city)
    address: Address;

    @Column({type:'time without time zone'})
    last_update = Date;
}