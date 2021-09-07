import * as express from 'express';
import * as Mailgun from 'mailgun.js';
import * as FormData from 'form-data';
import MailGun from 'mailgun.js';
import { mailgunConfig } from '../config';

const mailgun = new (<typeof MailGun>(<any>Mailgun))(<any>FormData).client({
    username: 'api',
    key: mailgunConfig.secret
});
    
const router = express.Router();

router.post('/', async (req, res) => {
    try {
       res.json({ message: "Email sent!"}) 
    } catch (error) {
        res.status(500).json({ message: "Server error, check it out."})
    }
})

export default router;
