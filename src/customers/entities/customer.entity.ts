import { Address } from "src/types/address.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class Customer {
    @PrimaryGeneratedColumn()
    customer_id: Number;

    @Column({ type: 'varchar', length: 45 })
    first_name: string;

    @Column({ type: 'varchar', length: 45 })
    last_name: string;

    @Column({ type: 'bool'})
    activebool: boolean;

    @Column({ type: 'varchar', length: 65 })
    email: string;

    @Column({ type: 'bool'})
    active: boolean;

    @ManyToOne(() => Address,)
    @JoinColumn({ name: 'address_id', referencedColumnName: 'address_id' })
    adress: Address;

    @Column({ type: 'time without time zone' })
    create_date: Date;

    @Column({ type: 'time without time zone' })
    last_udpate: Date;
}
