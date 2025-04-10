// eslint-disable-next-line @typescript-eslint/no-require-imports
require('express-async-errors');
import express from 'express';
import { connect } from 'mongoose';
import { MONGODB_URI } from './utils/config';
import universitiesRouter from './routes/universities';
const app = express();
app.use(express.json());

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

export default app;