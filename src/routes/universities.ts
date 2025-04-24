
import express from 'express';
import Universities from '../models/universityModel';
import Majors from '../models/majorModel';
const universitiesRouter = express.Router();

///Routes for /api/universities

universitiesRouter.get('/', async (_req, res) => {
    ///Get all the universities and respond to front-end
    const response = await Universities.find({});
    res.json(response);
});

universitiesRouter.get('/:id', async (req, res) => {
    ///Get the specific university based on the id params.
    const id: string = req.params.id;
    const response = await Universities.findOne({ id: id });
    if (response) {
        res.status(200).json(response);
    } else {
        res.status(404).json({ error: "malformed id" });
    }
});

universitiesRouter.get('/:id/majors', async (req, res) => {
    ///Get the majors of a specific university based on the id params
    const id: string = req.params.id;
    const response = await Majors.find({ uni_id: id });
    if (response) {
        res.status(200).json(response);
    } else {
        res.status(404).json({ error: "malformed id" });
    }

});

export default universitiesRouter;