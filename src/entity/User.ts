import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Booking } from "./Booking";
import { Review } from "./Review";
import { Comment } from "./Comment";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; 

    @Column()
    email: string;

    @Column()
    contact_no: number;

    @Column()
    created_at: Date;

    @Column()
    update_at : Date;

    @OneToMany(type => Booking, booking=> booking.user)
    bookings:Booking[]

    @OneToMany(type => Comment, comment=> comment.user)
    comments:Comment[]

  }

