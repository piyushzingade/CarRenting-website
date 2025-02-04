import { Request, Response } from "express";

export const contactUs = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    // Logic to save contact info or send email
    res.status(200).json({ message: "Thank you for contacting us!" });
  } catch (error) {
    res.status(500).json({ error: "Error submitting contact form" });
  }
};
