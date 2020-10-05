import { Arg, ID, Mutation, Resolver } from "type-graphql";
import { Channel } from "../entity/Channel";
import { Message } from "../entity/Message";
import getCurrentUser from "../getCurrentUser";

@Resolver()
export class MessageResolver {
  @Mutation(() => Message)
  async sendMessage(
    @Arg("channel", () => ID) channelID: string,
    @Arg("text") text: string
  ) {
    const user = await getCurrentUser();
    const channel = await Channel.findOneOrFail(channelID);
    const message = Message.create({
      text,
      channel,
      sender: user,
    });

    return await message.save();
  }
}
