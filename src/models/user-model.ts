import { model, Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  name: String,
  password: String,
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});
export const UserModel =
  mongoose.models.user || mongoose.model("user", UserSchema);
