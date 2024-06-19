import { gql } from "graphql-tag";

export const TodoTypeDefs = gql`
  type Todo {
    _id: String
    title: String
    status: Boolean
    team: String
    date: String
    deletedStatus: Boolean
  }
  type User {
    email: String
    name: String
    password: String
    todos: [Todo]
  }
  input CreateTodoInput {
    title: String
    team: String
  }
  input CreateTodoToUserInput {
    title: String
    team: String
    id: String
    token: String
    date: String
  }
  input DeleteId {
    id: String
    token: String
  }
  input EdithTodoInput {
    id: String
    title: String
    team: String
  }
  input inputSignUp {
    email: String!
    name: String!
    pass: String!
  }
  input LoginUserInput {
    email: String
    pass: String!
  }
  type deletedTodo {
    _id: String
    title: String
    status: Boolean
    team: String
    Action: String
    date: String
  }
  input Token {
    token: String
  }
  type Query {
    todoQuery: [Todo]
    getUser: [User]
    getDeletedTodo(input: Token): [deletedTodo]
    getTodoFromUser(input: Token): [User]
  }
  input RefreshTodoInput {
    id: String
  }

  type Mutation {
    getTodoFromUser(input: Token): [User]
    todoMutation(input: CreateTodoInput): [Todo]
    deleteTodo(input: DeleteId): Todo
    edithTodo(input: EdithTodoInput): Todo
    signUpUser(input: inputSignUp): User
    RefreshTodo(input: RefreshTodoInput): Todo
    deleteTodoFromTrash(input: RefreshTodoInput): Todo
    loginUser(input: LoginUserInput): String
    CreateTodoToUser(input: CreateTodoToUserInput): [Todo]
  }
`;
