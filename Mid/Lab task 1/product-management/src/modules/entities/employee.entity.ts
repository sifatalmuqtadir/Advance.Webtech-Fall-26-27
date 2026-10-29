import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("employees")
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 150 })
  name!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 20 })
  phone!: string;

  
  @Exclude({ toPlainOnly: true })
  @Column({ type: "varchar", length: 255 })
  password!: string;

  //@Column({ type: "int" })
  //Age!: number;

  @Column({ type: "int" })
  age!: number;

  @Column({ type: "int" })
  yearsOfWorking!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
