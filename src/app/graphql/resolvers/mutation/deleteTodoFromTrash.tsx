import { DeletedModel } from "@/models/todo-delete";
import { RefreshTodoInput } from "@/graphql/generated/client";
export const deleteTodoFromTrash = async (
  _: any,
  { input }: { input: RefreshTodoInput },
  context: any
) => {
  const { id } = input;
  try {
    const deletedTodo = await DeletedModel.findByIdAndDelete(id);
    return deletedTodo;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
