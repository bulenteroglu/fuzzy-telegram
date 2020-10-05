import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lazy } from "../types";
import { User } from "./User";
import { Channel } from "./Channel";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Message extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn({ type: "datetime" })
  createdAt!: Date;

  @Field(() => User)
  @ManyToOne(() => User, { lazy: true })
  sender!: Lazy<User>;

  @Field()
  @Column()
  text: string;

  @Field(() => Channel)
  @ManyToOne(() => Channel, (channel) => channel.messages, { lazy: true })
  channel!: Channel;
}
