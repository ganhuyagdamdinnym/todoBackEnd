import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import { connect } from "@/utils/mongoDb";
import { TodoTypeDefs } from "@/app/graphql/schema/todo";
import { resolvers } from "@/app/graphql/resolvers";
import { UserTypeDefs } from "@/app/graphql/schema/user";
//console.log(Todo);
connect();

const server = new ApolloServer({
  typeDefs: TodoTypeDefs,
  resolvers,
});
// const UserServer = new ApolloServer({
//   typeDefs: TodoTypeDefs,
//   resolvers,
// });
// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});
// const handlerUser = startServerAndCreateNextHandler<NextRequest>(UserServer, {
//   context: async (req) => ({ req }),
// });

export { handler as GET, handler as POST };
// export { handlerUser as GET, handlerUser as POST };
