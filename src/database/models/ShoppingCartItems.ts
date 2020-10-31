import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, ManyToOne, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";
import  Product  from "./Product"
import ShoppingCart from "./ShoppingCart"

@Entity('shoppingcartitems')
export default class ShoppingCartItems extends DefaultAttributes {
    @Column()
    amount:number

    @ManyToMany(type => Product , product => Product )
    product:Product[]

    @ManyToOne(type => ShoppingCart , shoppingcart => ShoppingCart )
    shoppingcart:ShoppingCart[]

}