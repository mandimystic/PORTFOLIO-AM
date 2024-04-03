import { z } from 'zod';
import { contactFormSquema } from '../views/validationSchema';

export type ContactFormValues = z.infer<typeof contactFormSquema>;