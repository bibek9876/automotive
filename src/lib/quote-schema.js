// @ts-check

import { z } from 'zod';

export const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Enter your full name.'),
  phone: z.string().trim().min(8, 'Enter a valid phone number.'),
  email: z.email('Enter a valid email address.'),
  service: z.string().trim().min(1, 'Select a service.'),
  car_model: z.string().trim().min(2, 'Enter your car model.'),
  message: z.string().trim().min(10, 'Add a few details about your vehicle.'),
  website: z.string().max(0, 'Spam detected.').optional().default(''),
});

/**
 * @typedef {z.infer<typeof quoteSchema>} QuoteRequest
 */
