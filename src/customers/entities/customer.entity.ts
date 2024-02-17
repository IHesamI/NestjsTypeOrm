import { Address } from "src/types/address.entity";
import { Rental } from "src/types/rental.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "src/payments/entities/payment.entity";

@Entity('customers')
export class Customer {
    @PrimaryGeneratedColumn()
    customer_id: Number;

    @Column({ type: 'varchar', length: 45 })
    first_name: string;

    @Column({ type: 'varchar', length: 45 })
    last_name: string;

    @Column({ type: 'bool' })
    activebool: boolean;

    @Column({ type: 'varchar', length: 65 })
    email: string;

    @Column({ type: 'bool' })
    active: boolean;

    @ManyToOne(() => Address,)
    @JoinColumn({ name: 'address_id', referencedColumnName: 'address_id' })
    adress: Address;

    @Column({ type: 'time without time zone' })
    create_date: Date;

    @OneToMany(() => Rental, rental => rental.customer_id)
    rental: Rental;

    @Column({ type: 'time without time zone' })
    last_udpate: Date;

    @OneToMany(() => Payment,payment=>payment.renatl_id)
    payment: Payment;

}
