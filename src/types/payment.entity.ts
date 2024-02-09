import { Entity, Column, PrimaryGeneratedColumn, } from "typeorm";

@Entity("payments")
export class Payments {
    @PrimaryGeneratedColumn()
    payment_id: Number;

    // @TableForeignKey()
    @Column({nullable:true})
    customer_id: Number;

    @Column({nullable:true})
    staff_id: Number;

    @Column({nullable:true})
    rental_id: Number;

    @Column({nullable:true})
    amount: number;

    @Column({nullable:true})
    payment_date:Date;
}