import DefaultAttributes from "./DefaultAttributes";
import { Entity, ManyToMany, OneToOne, JoinTable, ManyToOne, Column, OneToMany } from "typeorm";
import ShoppingCartItems from "./ShoppingCartItems"
import Order from "./Order";
import User from "./User";

@Entity('shoppingcart')
export default class ShoppingCart extends DefaultAttributes {

    @OneToMany(type => ShoppingCartItems , shoppingcartitems => ShoppingCartItems )
    shoppingcartitems: ShoppingCartItems[]

    @OneToOne(type => Order, order => Order)
    order: Order

    @ManyToOne(type => User , user => User )
    user: User[]

    @Column()
    finished:boolean


}