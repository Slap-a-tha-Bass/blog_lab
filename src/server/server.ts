import express from 'express';
import routes from './routes';
import path from 'path';
import passport from 'passport';
import { configurePassport } from './middlewares/passport-strategies.mw';

const app = express();

configurePassport(app);
app.use(express.json());
app.use(express.static('public'));
app.use('/', routes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
