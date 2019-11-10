import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Property } from "./Property";


@Entity()
export class Locality {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    location_name: string;

    @Column()
    location_nearby: string;

    @ManyToMany(type => Property, property => property.localities)
    @JoinTable({
        name: "properties_localities",
        joinColumns: [{name: "locality_id"}],//always refer to current entity
        inverseJoinColumns: [{name: "property_id"}]
    })
    properties: Property[]



}