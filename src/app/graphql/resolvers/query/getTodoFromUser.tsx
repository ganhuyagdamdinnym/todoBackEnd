import { UserModel } from "@/models/user-model";
import { CreateTodoToUserInput } from "@/graphql/generated/client";
import { Token } from "@/graphql/generated/client";
import { title } from "process";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
export const getTodoFromUser = async (
  _: Token,
  { input }: { input: Token },
  context: Token
) => {
  const { token } = input;
  console.log("token", token);
  if (!token) {
    return "error";
  } else {
    try {
      const decoded = jwt.verify(token, "SomeSecretKey") as { id: string };
      console.log("key", decoded);
      const user = "test";
      const id = decoded.id;
      const result = await UserModel.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(id) } },
        {
          $lookup: {
            from: "todos", // Collection name of the todos
            localField: "_id",
            foreignField: "userId", // Field in the todos collection that references the user's ID
            as: "todos",
          },
        },
      ]);
      console.log("res", result);
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
