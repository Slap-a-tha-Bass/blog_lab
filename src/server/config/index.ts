import * as dotenv from 'dotenv';

dotenv.config();

export const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST
}
export const stripeConfig = {
    secret: process.env.STRIPE_KEY
}
export const mailgunConfig = {
    secret: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    toEmail: process.env.MAILGUN_TO_EMAIL
}