import { TodoModel } from "@/models/todo-model";
import {
  CreateTodoInput,
  MutationEdithTodoArgs,
} from "@/graphql/generated/client";
export const todoMutation = async (
  _: any,
  { input }: { input: CreateTodoInput },
  context: any
) => {
  const { title, team } = input;
  //   const date = new Date(dateCreate).toString();
  //   const shortDate = date.split("GMT");
  //   const newDate = shortDate[0];
  //   console.log(newDate);
  console.log("title", title);
  try {
    await TodoModel.create({
      title: title,
      team: team,
      //   date: newDate,
      status: false,
    });
    const todo = await TodoModel.find();
    return todo;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};
