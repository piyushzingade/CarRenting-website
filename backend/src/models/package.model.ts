import mongoose, { Schema, Document } from "mongoose";

export interface IPackage extends Document {
  name: string;
  price: number;
  destinations: string[];
  couponCode?: string;
}

const PackageSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  destinations: [{ type: String, required: true }],
  couponCode: { type: String },
});

export const Package = mongoose.model<IPackage>("Package", PackageSchema);
