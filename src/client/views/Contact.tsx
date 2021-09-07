import React, { useState } from 'react';
import { ContactProps } from '../../types';

const Contact = () => {

    const [from, setFrom] = useState<ContactProps['from']>('');
    const [subject, setSubject] = useState<ContactProps['subject']>('');
    const [message, setMessage] = useState<ContactProps['message']>('');

    const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ from, subject, message })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <form className="form-group p-3 border rounded shadow bg-light">
                        <label className="text-warning">From:</label>
                        <input value={from} onChange={e => setFrom(e.target.value)} type="text" className="form-control mb-2" />
                        <label className="text-warning">Subject:</label>
                        <input value={subject} onChange={e => setSubject(e.target.value)} type="text" className="form-control mb-2" />
                        <label className="text-warning">Message:</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} className="form-control mb-2" />
                        <button onClick={handleSubmitClick} className="btn btn-outline-warning">Contact me!</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Contact;
