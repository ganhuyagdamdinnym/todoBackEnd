import { gql } from "graphql-tag";
export const UserTypeDefs = gql`
  type User {
    id: String
    email: String
    name: String
  }
`;
