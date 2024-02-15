import { Film } from "src/films/entities/film.entity";
import { Inventory } from "src/types/Inventory.entity";
import { Address } from "src/types/address.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('stores')
export class Store {
    @PrimaryGeneratedColumn()
    store_id: Number;

    @Column()
    manager_staff_id: Number;

    @OneToOne(() => Address, address => address.store)
    @JoinColumn({ name: 'address_id', referencedColumnName: 'address_id' })
    address: Address;

    @OneToOne(() => Inventory)
    inventory: Inventory;

    @Column({ type: 'time without time zone' })
    last_udpate: Date;

}