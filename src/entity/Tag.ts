import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Property } from "./Property";


@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @ManyToMany(type => Property, property => property.tags)
    @JoinTable({
        name: "properties_tags",
        joinColumns: [{name: "tag_id"}],//always refer to current entity
        inverseJoinColumns: [{name: "property_id"}]
    })
    properties: Property[]



}
