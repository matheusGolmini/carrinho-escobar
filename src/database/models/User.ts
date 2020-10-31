import DefaultAttributes from "./DefaultAttributes";
import Address from "./Address"
import { Column, Entity, ManyToOne, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";
import Order from "./Order"
import ShoppingCartItems from "./ShoppingCartItems";
import ShoppingCart from "./ShoppingCart";


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

    @OneToMany(type => ShoppingCartItems, shoppingcartitems => ShoppingCartItems)
    shoppingcartitems:ShoppingCartItems

    @OneToMany(type => ShoppingCart, shoppingcart => ShoppingCart)
    shoppingcart:ShoppingCart
}