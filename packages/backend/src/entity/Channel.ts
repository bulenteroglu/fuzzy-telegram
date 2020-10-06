import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lazy } from "../types";
import { Message } from "./Message";

@ObjectType()
@Entity()
export class Channel extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  name!: string;

  @Field()
  @Column()
  description!: string;

  @Field(() => [Message])
  @OneToMany(() => Message, (message) => message.channel, { lazy: true })
  messages!: Lazy<Message[]>;
}
