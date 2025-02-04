import { Request, Response } from "express";
import { User } from "../models/user.model";

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) { 
      res.status(404).json({ error: "User not found" });
      return;
  }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user profile" });
  }
};


export const getPurchase = async(req: Request , res : Response) =>{

}