import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { ChannelResolver } from "./resolvers/ChannelResolver";
import { Channel } from "./entity/Channel";
import { Message } from "./entity/Message";
import { MessageResolver } from "./resolvers/MessageResolver";

const PORT = process.env.PORT || 4000;

async function seed() {
  const user = User.create({
    name: "Bulent Eroglu",
    username: "bilo",
  });

  await user.save();

  const channel = Channel.create({
    name: "test_channel",
    description: "test_channel",
  });

  await channel.save();

  await Message.insert({
    channel,
    sender: user,
    text: "This is a message",
  });
}

async function bootstrap() {
  await createConnection(require("../ormconfig.json"));

  // await seed();

  const schema = await buildSchema({
    resolvers: [ChannelResolver, MessageResolver],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen(PORT);
  console.log(`Servrer is running, playground available at ${url}`);
}

bootstrap();
