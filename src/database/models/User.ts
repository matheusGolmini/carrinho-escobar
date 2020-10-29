import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, ManyToOne, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";

@Entity('user')
export default class User extends DefaultAttributes {
    @Column()
    email: string

    @Column()
    password: string

}