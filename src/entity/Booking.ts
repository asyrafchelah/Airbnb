import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Property } from "./Property";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type =>Property,property=> property.bookings)
    @JoinColumn({name:"property_id"})
    property:Property

    @Column()
    booking_date: Date;

    @ManyToOne(type =>User,user=> user.bookings)
    @JoinColumn({name:"user_id"})
    user:User

    @Column()
    check_out: Date;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;


}

