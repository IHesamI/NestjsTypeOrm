import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Inventory } from "./Inventory.entity";
import { Customer } from "src/customers/entities/customer.entity";
import { Staff } from "src/staff/entities/staff.entity";
import { Payment } from "src/payments/entities/payment.entity";

@Entity('rentals')
export class Rental {
    @PrimaryGeneratedColumn()
    rental_id: Number;


    @ManyToOne(() => Inventory)
    @JoinColumn()
    inventory_id: Inventory;

    @ManyToOne(() => Customer)
    @JoinColumn()
    customer_id: Customer;

    @Column({ type: 'time without time zone', })
    rental_date: Date;

    @ManyToOne(() => Staff)
    @JoinColumn()
    staff_id: Staff;


    @OneToMany(() => Payment,payment=>payment.renatl_id)
    payment: Payment;
    
    @Column({ type: 'time without time zone' })
    last_update: Date;
}