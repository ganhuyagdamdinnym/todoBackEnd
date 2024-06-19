import { TodoModel } from "@/models/todo-model";
import { DeleteId } from "@/graphql/generated/client";
import { DeletedModel } from "@/models/todo-delete";
export const deleteTodo = async (
  _: any,
  { input }: { input: DeleteId },
  context: any
) => {
  const { id } = input;
  try {
    const deletedTodo = await TodoModel.findByIdAndUpdate(id, {
      status: true,
    });
    // console.log("deklete", deleteTodo);
    // await DeletedModel.create({
    //   title: deletedTodo.title,
    //   team: deletedTodo.team,
    //   status: true,
    //   date: deletedTodo.date,
    // });
    // if (deleteTodo == null) {
    //   return "heregle";
    // }
    return deletedTodo;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
