import { DeletedModel } from "@/models/todo-delete";
import { Token } from "@/graphql/generated/client";
import jwt from "jsonwebtoken";
import { UserModel } from "@/models/user-model";
import mongoose from "mongoose";
export const getDeletedTodo = async (
  _: Token,
  { input }: { input: Token },
  context: Token
) => {
  const { token } = input;
  console.log("tokenddd", token);
  if (!token) {
    return "error";
  } else {
    try {
      const decoded = jwt.verify(token, "SomeSecretKey") as { id: string };
      console.log("key", decoded);
      const id = decoded.id;
      const result = await UserModel.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(id) } },
        {
          $lookup: {
            from: "deletedTodos", // Collection name of the todos
            localField: "_id",
            foreignField: "userId", // Field in the todos collection that references the user's ID
            as: "deletedTodos",
          },
        },
      ]);
      const user = await UserModel.findById(id);
      console.log("res", result);
      console.log("user", user);
      //const user = await UserModel.findById(id);
      if (!result) {
        console.log("user not found");
      }
      return result;
    } catch (err) {
      throw err;
    }
  }
};
