import { gql } from "graphql-tag";
import { TodoModel } from "@/models/todo-model";
// export const TodoTypeDefs = gql`
//   type Query {
//     title: String
//     status: Boolean
//     team: String
//   }
// // `;
// export const Todo = () => {
//   return Query: {
//     todos: async () => {
//       try {
//         return await TodoModel.find();
//       } catch (error) {
//         console.error("Error fetching todos:", error);
//         throw error;
//       }
//     },
// };

export const todoQuery = async () => {
  try {
    const todos = await TodoModel.find();
    //console.log("todo", todos);
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};
