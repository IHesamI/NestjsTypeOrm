import { IsEmail } from "class-validator";
import { Actor } from "src/actors/entities/actor.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "./store.entity";
import { Address } from "src/types/address.entity";
import { Rental } from "src/types/rental.entity";
import { Payment } from "src/payments/entities/payment.entity";

@Entity('staffs')
export class Staff {
    @PrimaryGeneratedColumn()
    staff_id: Number;

    @Column({ type: 'varchar', length: 45 })
    first_name: string;

    @Column({ type: 'varchar', length: 45 })
    last_name: string;


    @ManyToOne(() => Address,)
    @JoinColumn({ name: 'address_id', referencedColumnName: 'address_id' })
    adress: Address;

    @IsEmail()
    @Column({ type: 'varchar', length: 100 })
    email: string;

    @OneToOne(() => Store)
    @JoinColumn({ name: 'store_id', referencedColumnName: 'store_id' })
    store: Store;

    @Column({ type: 'boolean' })
    active: boolean;

    @Column({ type: 'varchar', length: 45 })
    username: string;

    @Column({ type: 'varchar', length: 60 })
    password: string;

    @OneToMany(() => Rental, rental => rental.staff_id)
    rental: Rental;

    @Column({ type: 'timestamp without time zone' })
    last_update: Date;

    @Column({ type: 'bytea' })
    image: BinaryData[];

    @OneToMany(() => Payment,payment=>payment.renatl_id)
    payment: Payment;

}
