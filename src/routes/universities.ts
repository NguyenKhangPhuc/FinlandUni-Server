
import express from 'express';
import Universities from '../models/universityModel';
const universitiesRouter = express.Router();


universitiesRouter.get('/', async (_req, res) => {
    const response = await Universities.find({});
    res.json(response);
});

export default universitiesRouter;