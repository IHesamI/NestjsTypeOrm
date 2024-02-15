import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('rentals')
export class Rental {
    @PrimaryGeneratedColumn()
    rental_id: Number;


    @Column({type:'time without time zone'})
    last_update:Date;
}