import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, ManyToOne, OneToMany} from "typeorm";
import User from "./User";

@Entity('address')
export default class Address extends DefaultAttributes {
    @Column()
    street:string

    @Column()
    city:string

    @Column()
    stade:string

    @Column()
    country:string

    @Column()
    number:number

    @OneToMany(type => User , user => User )
    user:User

    
}