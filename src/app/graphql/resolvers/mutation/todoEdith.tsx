import { gql } from "graphql-tag";
import { TodoModel } from "@/models/todo-model";
import { EdithTodoInput } from "@/graphql/generated/client";
export const edithTodo = async (
  _: any,
  { input }: { input: EdithTodoInput },
  context: any
) => {
  const { title, team, id } = input;
  try {
    console.log("working");
    const edithTodo = await TodoModel.findByIdAndUpdate(id, {
      title: title,
      team: team,
    });
    console.log("edith", edithTodo);
    return edithTodo;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
