
import { z } from 'zod';

export const contactFormSquema = z.object({
  fullname: z.string().regex(/^[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1\s]*)$/, 'Tanto el nombre como el apellido deben empezar por mayusculas'),
  email: z.string().email('Tiene que ser un email valido'),
  message: z.string().min(1),
});