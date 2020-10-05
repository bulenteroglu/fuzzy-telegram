import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { TestResolver } from "./resolvers/TestResolver";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  await createConnection(require("../ormconfig.json"));

  const schema = await buildSchema({
    resolvers: [TestResolver],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen(PORT);
  console.log(`Servrer is running, playground available at ${url}`);
}

bootstrap();
