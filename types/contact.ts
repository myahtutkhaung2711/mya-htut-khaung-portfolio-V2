export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    company?: string; // Honeypot field for spam prevention
}