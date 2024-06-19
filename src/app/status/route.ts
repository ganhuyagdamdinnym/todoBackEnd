import { connect } from "@/utils/mongoDb";
import { TodoModel } from "@/models/todo-model";
export const POST = async (req: Request) => {
  const { title } = await req.json();
  console.log(title);
  try {
    const todo = await TodoModel.findOne({ _id: title });
    console.log(todo);
    if (todo.status == false) {
      await TodoModel.findOneAndUpdate(
        { _id: title },
        {
          status: true,
        }
      );
    } else {
      await TodoModel.findOneAndUpdate(
        { _id: title },
        {
          status: false,
        }
      );
    }
    return Response.json(
      { message: "succeed" },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
        },
      }
    );
  } catch (err) {
    return Response.json(
      { message: "succeed" },
      {
        status: 404,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
        },
      }
    );
  }
};
