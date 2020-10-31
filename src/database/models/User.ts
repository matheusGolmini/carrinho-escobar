import DefaultAttributes from "./DefaultAttributes";
import Address from "./Address"
import { Column, Entity, ManyToOne, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";
import Order from "./Order"

@Entity('user')
export default class User extends DefaultAttributes {
    @Column()
    email: string

    @Column()
    password: string

    @ManyToOne(type => Address , address => Address )
    address: Address[]

    @ManyToOne(type => Order , order => Order )
    order: Order[]

}