import { UserModel } from "@/models/user-model";
// import{ }
import { InputSignUp } from "@/graphql/generated/client";
import bcrypt from "bcrypt";

export const signUpUser = async (
  _: any,
  { input }: { input: InputSignUp },
  context: any
) => {
  const { email, name, pass } = input;
  console.log("title", email, name, pass);
  console.log(name);
  console.log(pass);
  try {
    const hashedPass = await bcrypt.hash(pass, 10);
    console.log(hashedPass);
    const user = await UserModel.create({
      email: email,
      name: name,
      password: hashedPass,
    });
    console.log("user", user);
    return user;
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
