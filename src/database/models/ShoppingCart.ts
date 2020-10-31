import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, ManyToOne, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";
import ShoppingCartItems from "./ShoppingCartItems"

@Entity('shoppingcart')
export default class ShoppingCart extends DefaultAttributes {

    @ManyToMany(type => ShoppingCartItems , shoppingcartitems => ShoppingCartItems )
    shoppingcartitems:ShoppingCartItems[]


}