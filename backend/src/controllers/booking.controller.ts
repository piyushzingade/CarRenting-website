import { Request, Response } from 'express';
import Booking from '../models/booking.model';

export const createBooking = async (req: Request, res: Response) => {
  try {
    // Get user ID from the authenticated user
    const userId = req.user?._id || req.body.userId;
    
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }
    
    // Create booking with user ID
    const booking = new Booking({
      ...req.body,
      userId: userId
    });
    
    await booking.save();
    res.status(201).json(booking);
  } catch (error: any) {
    console.error('Error creating booking:', error);
    res.status(400).json({ message: error.message });
  }
};

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    // Get user ID from the authenticated user
    const userId = req.user?._id;
    
    // If user is authenticated, only return their bookings
    const query = userId ? { userId } : {};
    
    const bookings = await Booking.find(query)
      .populate('userId', 'name email')
      .populate('carId', 'name model price');
    res.status(200).json(bookings);
  } catch (error: any) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: error.message });
  }
};

export const getBookingById = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('userId', 'name email')
      .populate('carId', 'name model price');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error: any) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ message: error.message });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error: any) {
    console.error('Error updating booking:', error);
    res.status(400).json({ message: error.message });
  }
};

export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ message: error.message });
  }
}; 