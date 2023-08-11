import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {User} from "./user";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    age: number;
    @Column()
    salary: number;
    @ManyToOne(() => User, (user) => user.id)
    user: User;

}
