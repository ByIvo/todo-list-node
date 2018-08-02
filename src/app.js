import express from 'express';
import bodyParser from 'body-parser';
import appRoutes from './routes';

const app = express();

app.use(bodyParser.json());
app.use('/', appRoutes);

export default app;