import { UserModel } from "@/models/user-model";
export const getUser = async () => {
  try {
    const users = await UserModel.find();
    console.log("todo", users);
    return users;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};
