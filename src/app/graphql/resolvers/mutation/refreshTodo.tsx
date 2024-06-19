import { DeletedModel } from "@/models/todo-delete";
import { TodoModel } from "@/models/todo-model";
import { RefreshTodoInput } from "@/graphql/generated/client";
export const RefreshTodo = async (
  _: any,
  { input }: { input: RefreshTodoInput },
  context: any
) => {
  const { id } = input;
  try {
    const todo = await DeletedModel.findByIdAndDelete(id);
    console.log(todo);
    const Newtodo = await TodoModel.create({
      title: todo.title,
      team: todo.team,
      status: false,
      date: todo.date,
    });
    return Newtodo;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
