import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { Booking } from "./Booking";
import { Owner } from "./Owner";
import { Tag } from "./Tag";
import { Review } from "./Review";
import { Locality } from "./Locality";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @ManyToOne(type =>Owner,owner=> owner.properties)
    @JoinColumn({name:"owner_id"})
    owner:Owner

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @OneToMany(type => Booking, booking=> booking.property)
    bookings:Booking[]

    @ManyToMany(type => Tag, tag => tag.properties)
    tags: Tag[]

    @OneToMany(type => Review, review=> review.property)
    reviews:Review[]

    @ManyToMany(type => Locality, locality => locality.properties)
    localities: Tag[]

}

