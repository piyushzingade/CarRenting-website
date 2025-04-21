import mongoose, { Schema, Document } from "mongoose";
import { z } from "zod";

export interface ICartItem {
  itemId: mongoose.Types.ObjectId;
  itemType: "car" | "package";
  price: number;
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  cart: ICartItem[];
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: "cart.itemType" },
      itemType: { type: String, enum: ["car", "package"], required: true },
      price: { type: Number, required: true },
    },
  ],
});

export const User = mongoose.model<IUser>("User", UserSchema);

// Validation Schemas
export const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signinSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
