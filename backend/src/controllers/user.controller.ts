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


export const addToCart = async (req: Request, res: Response) => {
  const { itemId, itemType, price } = req.body;

  if (!itemId || !itemType || !price) {
     res.status(400).json({ error: "Invalid data" });
     return;
  }

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
       res.status(404).json({ error: "User not found" });
       return;
    }

    // Add item to cart
    user.cart.push({ itemId, itemType, price });
    await user.save();

    res.status(200).json({ message: "Item added to cart", cart: user.cart });
  } catch (error) {
    res.status(500).json({ error: "Error adding item to cart" });
  }
};
export const removeFromCart = async (req: Request, res: Response) => {
  const { itemId } = req.body;

  if (!itemId) {
     res.status(400).json({ error: "Item ID is required" });
     return;
  }

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
       res.status(404).json({ error: "User not found" });
       return;
    }

    // Remove item from cart
    user.cart = user.cart.filter((item) => item.itemId.toString() !== itemId);
    await user.save();

    res
      .status(200)
      .json({ message: "Item removed from cart", cart: user.cart });
  } catch (error) {
    res.status(500).json({ error: "Error removing item from cart" });
  }
};
export const getUserCart = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id)
      .select("cart")
      .populate("cart.itemId");

    if (!user) {
       res.status(404).json({ error: "User not found" });
       return;
    }

    res.status(200).json({ cart: user.cart });
  } catch (error) {
    res.status(500).json({ error: "Error fetching cart" });
  }
};
