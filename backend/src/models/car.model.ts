import mongoose, { Schema, Document } from "mongoose";

export interface ICar extends Document {
  name: string;
  type: "economy" | "premium" | "luxury";
  price: number;
  description: string;
  availability: boolean;
}

const CarSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["economy", "premium", "luxury"],
    required: true,
  },
  price: { type: Number, required: true },
  description: { type: String },
  availability: { type: Boolean, default: true },
  image: String,
});

export const Car = mongoose.model<ICar>("Car", CarSchema);
