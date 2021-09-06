import React, { useState } from 'react';
import { DonateProps } from '../../types';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Donate = () => {

    const [fullName, setFullName] = useState<DonateProps['fullName']>('');
    const [amount, setAmount] = useState<DonateProps['amount']>(5);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmitPayment = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const cardData = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardData,
            billing_details: {
                name: fullName
            }
        });

        if (error) {
            console.log(error);
        } else {
            const res = await fetch('/api/donate', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ amount, paymentMethod })
            });
            const paymentComplete = await res.json();
            console.log(paymentComplete);
        }

    };


    return (
        <>
            <div className="container">
                <section className="row mt-3 justify-content-start">
                    <div className="col-md-4">
                        <h3 className="text-warning">Donate!</h3>
                        <form className="form-group bg-light justify-content-center border rounded-lg p-3">
                            <label className="text-warning">Full Name</label>
                            <input placeholder="Name as it appears on card" type="text" className="form-control" value={fullName} onChange={e => setFullName(e.target.value)} />
                            <label className="text-warning">Donation amount ($USD)</label>
                            <input type="number" className="form-control" value={Number(amount)} onChange={e => setAmount(Number(e.target.value))} />
                            <label className="text-warning">Credit Card Information</label>
                            <CardElement className="form-control" />
                            <div className="d-flex justify-content-end">
                                <button onClick={handleSubmitPayment} className="btn btn-outline-primary my-2">Submit Payment</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Donate;
