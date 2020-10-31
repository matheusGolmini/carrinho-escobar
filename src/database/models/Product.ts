import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, ManyToOne, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";
import ShoppingCartItems from "./ShoppingCartItems"

@Entity('product')
export default class Product extends DefaultAttributes {
    @Column()
    name:string

    @Column()
    price:number

    @Column()
    amount:number

    @ManyToMany(type => ShoppingCartItems , shoppingcartitems => ShoppingCartItems )
    shoppingcartitems:ShoppingCartItems[]


}