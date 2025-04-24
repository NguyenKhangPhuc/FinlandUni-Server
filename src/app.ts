// eslint-disable-next-line @typescript-eslint/no-require-imports
require('express-async-errors');
import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import { MONGODB_URI } from './utils/config';
import universitiesRouter from './routes/universities';
import middleware from './utils/middleware';
const app = express();
app.use(express.json());

app.use(cors());

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await connect(MONGODB_URI);
}


app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/universities', universitiesRouter);

//Use middleware for handling error
app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);


export default app;