import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { Property } from "./Property";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    booking_date: Date;

    @ManyToOne(type =>Property,property=> property.reviews)
    @JoinColumn({name:"property_id"})
    property:Property

    @Column()
    overall_rating:number;

    @Column()
    location_rating:number;

    @Column()
    cleanliness_rating:number;

    @Column()
    value_rating:number;

    @Column()
    communication_rating:number;

    @Column()
    amenities_rating:number;

    
    @OneToMany(type => Comment, comment=> comment.user)
    comments:Comment[]



}
