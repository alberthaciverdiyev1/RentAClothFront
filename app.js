import express from 'express';
import path from 'path';
import cron from 'node-cron';
import routes from './src/Routes/Main.js';
import loggerMiddleware from './src/Middlewares/Logger.js';
import i18n from 'i18n';
import cookieParser from 'cookie-parser';


i18n.configure({
    locales: ['en', 'ru', 'az'],
    directory: './src/locales',
    defaultLocale: 'az',
    cookie: 'lang'
});

const app = express();
const port = process.env.PR_PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', './src/Views');
app.set('trust proxy', true);

app.use(express.static(path.resolve('./src/Public')));
app.use(express.json());
app.use(cookieParser());
app.use(i18n.init);
app.use('/', routes);
app.use((req, res, next) => { res.status(404).send('404 Not Found'); next(); });

app.listen(port, '0.0.0.0', () => { console.log(`Server is running at http://localhost:${port}`); });


