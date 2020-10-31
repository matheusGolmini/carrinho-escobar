import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, ManyToOne, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";

@Entity('stock')
export default class Stock extends DefaultAttributes {
    @Column()
    name:string
}