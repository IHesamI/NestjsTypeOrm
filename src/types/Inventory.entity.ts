import { Film } from "src/films/entities/film.entity";
import { Store } from "src/staff/entities/store.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('inventories')
export class Inventory {
    @PrimaryGeneratedColumn()
    inventory_id: Number;

    @OneToOne(() => Film)
    @JoinColumn({name:'film_id'})
    film: Film;
    
    @OneToOne(()=>Store)
    @JoinColumn({name:"store_id"})
    store:Store;

    @Column({type:'time without time zone'})
    last_update:Date;

    

}