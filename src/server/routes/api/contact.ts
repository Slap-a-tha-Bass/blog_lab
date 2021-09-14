import express from 'express';
import Mailgun from 'mailgun.js'
import FormData from 'form-data';
import { mailgunConfig } from '../../config';
import MailGun from 'mailgun.js';


const mailgun = new (<typeof MailGun>(<any>Mailgun))(<any>FormData).client({
    username: 'api',
    key: mailgunConfig.secret
});

const router = express.Router();

router.post('/', async (req, res) => {
    const newEmail = req.body;
    try {
        const readyMail = await mailgun.messages.create(mailgunConfig.domain, {
            to: mailgunConfig.toEmail,
            subject: newEmail.subject,
            from: newEmail.from,
            text: newEmail.message
        });
        res.json(readyMail);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error, check it out." })
    }
})

export default router;
