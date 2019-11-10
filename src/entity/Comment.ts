import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { Property } from "./Property";
import { User } from "./User";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type =>User,user=> user.comments)
    @JoinColumn({name:"user_id"})
    user:User

    @Column()
    user_name: string;

    @Column()
    date_created: Date;

    @Column()
    comment: string;

}