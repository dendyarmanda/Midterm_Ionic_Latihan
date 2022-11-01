import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
export const  CONTACT_TABLE ='contact';


@Entity(CONTACT_TABLE)
export class Contact{

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;

}
