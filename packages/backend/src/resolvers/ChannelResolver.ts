import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { Channel } from "../entity/Channel";

@Resolver()
export class ChannelResolver {
  @Query(() => [Channel])
  async channels() {
    return await Channel.find({});
  }

  @Query(() => Channel)
  async channel(@Arg("id", () => ID) id: number) {
    return await Channel.findOneOrFail(id);
  }

  @Mutation(() => Channel)
  async createChannel(
    @Arg("name") name: string,
    @Arg("description", { nullable: true }) description?: string
  ) {
    const channel = Channel.create({
      name,
      description,
    });
    return channel.save();
  }
}
