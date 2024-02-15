import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city.entity";
import { Store } from "src/staff/entities/store.entity";
import { Staff } from "src/staff/entities/staff.entity";

@Entity('addresses')
export class Address {
    @PrimaryGeneratedColumn()
    address_id: Number;

    @Column({ type: 'varchar', length: '150' })
    address: string;

    @Column({ type: 'varchar', length: '150' })
    address2: string;

    @Column({ type: 'int' })
    district: Number;

    @ManyToOne(() => City, city => city.address)
    @JoinColumn({
        name: 'city_id',
        referencedColumnName: 'city_id'
    })
    city: City;

    @OneToOne(() => Store, store => store.address)
    store: Store;

    @OneToMany(() => Staff, staff => staff.adress)
    staff: Staff;

    @Column({ type: "int" })
    postal_code: Number;

    @Column({ type: 'time without time zone' })
    last_update: Date;
}
