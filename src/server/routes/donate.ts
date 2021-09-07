import express from 'express';
import Stripe from 'stripe';
import { stripeConfig } from '../config';

const stripe = new Stripe(stripeConfig.secret, { apiVersion: '2020-08-27' });

const router = express.Router();

router.post('/', async (req, res) => {
    const { paymentMethod, amount } = req.body;
    try {
        const paymentFulfilled = await stripe.paymentIntents.create({
            currency: 'usd',
            amount: amount * 100,
            confirm: true,
            payment_method: paymentMethod.id
        });
        res.json(paymentFulfilled);
    } catch (error) {
        res.status(500).json({ message: "Server error, check logs" });
        console.log(error);
    }
})

export default router;