import express, { Request, Response, RequestHandler } from 'express';
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} from '../controllers/booking.controller';
import authMiddleware from '../middleware/auth.middleware';

const router = express.Router();

// Apply authentication middleware to all routes
router.use(authMiddleware);

// Create a new booking
router.post('/', createBooking as RequestHandler);

// Get all bookings
router.get('/', getAllBookings as RequestHandler);

// Get a specific booking by ID
router.get('/:id', getBookingById as RequestHandler);

// Update a booking
router.put('/:id', updateBooking as RequestHandler);

// Delete a booking
router.delete('/:id', deleteBooking as RequestHandler);

export default router; 