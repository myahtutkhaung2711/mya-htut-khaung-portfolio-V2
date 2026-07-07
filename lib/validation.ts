import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters loong").max(100),

    email: z.string().email("Please enter a valid email address."),

    subject: z.string().min(3, "Subject is required").max(100),

    message: z.string().min(10, "Message must be at least 10 characters long").max(1000),

    company: z.string().optional() // Honeypot field for spam prevention
});

export type ContactFormData = z.infer<typeof contactSchema>;
