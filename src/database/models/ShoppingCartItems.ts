import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, ManyToOne, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";
import ShoppingCart from "./ShoppingCart"
import User from "./User";

@Entity('shoppingcartitems')
export default class ShoppingCartItems extends DefaultAttributes {
    @Column()
    amount:number

    @Column()
    price:number

    @Column()
    produtoId:string

    @ManyToOne(type => ShoppingCart , shoppingcart => ShoppingCart, { eager:true, cascade:true } )
    shoppingcart:ShoppingCart[]

    @ManyToOne(type => User, user => User )
    user:User[]
}