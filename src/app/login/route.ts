import { connect } from "../../utils/mongoDb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "@/models/user-model";
export const POST = async (req: Request, res: any) => {
  const { email, pass } = await req.json();
  await connect();
  console.log("postll", email);
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
      return Response.json({ token });
      // return res.status(200).json({ token });
    }
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
