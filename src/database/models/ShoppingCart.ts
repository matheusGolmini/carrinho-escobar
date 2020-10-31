import DefaultAttributes from "./DefaultAttributes";
import { Entity, ManyToMany, OneToOne, JoinTable } from "typeorm";
import ShoppingCartItems from "./ShoppingCartItems"
import Order from "./Order";

@Entity('shoppingcart')
export default class ShoppingCart extends DefaultAttributes {

    @ManyToMany(type => ShoppingCartItems , shoppingcartitems => ShoppingCartItems )
    @JoinTable({ name: 'shoppingcart_shoppingcartitems'})
    shoppingcartitems: ShoppingCartItems[]

    @OneToOne(type => Order, order => Order)
    order: Order

}