import { Customer } from "src/customers/entities/customer.entity";
import { Staff } from "src/staff/entities/staff.entity";
import { Rental } from "src/types/rental.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('payments')
export class Payment {
    @PrimaryGeneratedColumn()
    payment_id: Number;

    @ManyToOne(() => Rental)
    @JoinColumn()
    renatl_id: Rental;

    @ManyToOne(() => Customer)
    @JoinColumn()
    customer_id: Customer;

    @ManyToOne(() => Staff)
    @JoinColumn()
    staff_id: Staff;

    @Column({ type: 'numeric' })
    amount: Number;

    @Column({ type: 'time without time zone' })
    payment_date: Date;


}
