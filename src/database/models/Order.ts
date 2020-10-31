import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, ManyToOne, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";
import ShoppingCartItems from "./ShoppingCartItems"
import User from "./User"

@Entity('order')
export default class Order extends DefaultAttributes {

    @ManyToMany(type => ShoppingCartItems , shoppingcartitems => ShoppingCartItems )
    shoppingcartitems:ShoppingCartItems[]

    @ManyToOne(type => User , user => User )
    user:User[]



}