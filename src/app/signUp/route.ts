import { connect } from "../../utils/mongoDb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "@/models/user-model";
export const POST = async (req: Request, res: any) => {
  const { email, name, pass } = await req.json();
  await connect();
  console.log("post", email);
  try {
    const hashed = await bcrypt.hash(pass, 10);
    await UserModel.create({
      email: email,
      name: name,
      password: hashed,
    });

    return Response.json({ message: "succeed" });
  } catch {
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
