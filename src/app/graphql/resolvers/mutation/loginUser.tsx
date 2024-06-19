import { UserModel } from "@/models/user-model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { LoginUserInput } from "@/graphql/generated/client";
export const loginUser = async (
  _: any,
  { input }: { input: LoginUserInput },
  context: any
) => {
  const { email, pass } = input;
  console.log("title", email, pass);
  console.log(pass);
  try {
    const userData = await UserModel.findOne({ email: email });
    if (!userData) {
      return Response.json({ message: "hereglegch alga" });
    }
    const isPasswordValid = await bcrypt.compare(pass, userData.password);
    if (!isPasswordValid) {
      return Response.json({ message: "hereglegch algaaaa" });
    } else {
      console.log("done");
      const token = jwt.sign({ id: userData._id }, "SomeSecretKey", {
        expiresIn: "4h",
      });
      console.log("token", token);
      return token;
    }
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
