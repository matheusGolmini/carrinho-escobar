import DefaultAttributes from "./DefaultAttributes";
import { Entity, JoinColumn, OneToOne, OneToMany } from "typeorm";
import User from "./User"
import ShoppingCart from "./ShoppingCart";

@Entity('order')
export default class Order extends DefaultAttributes {

    @OneToOne(type => ShoppingCart , shoppingcart => ShoppingCart )
    @JoinColumn({ name: 'shopping_cart' })
    shoppingcart: ShoppingCart

    @OneToMany(type => User , user => User )
    user: User



}