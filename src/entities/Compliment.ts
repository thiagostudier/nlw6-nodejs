import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid"
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {
  
  @PrimaryColumn()
  readonly id: String;

  @Column()
  user_sender: String;

  @JoinColumn({name: "user_sender"})
  @ManyToOne(() => User)
  userSender: User;

  @Column()
  user_receiver: String;

  @JoinColumn({name: "user_receiver"})
  @ManyToOne(() => User)
  userReceiver: User;

  @Column()
  tag_id: String;

  @JoinColumn({name: "tag_id"})
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }

}

export { Compliment };