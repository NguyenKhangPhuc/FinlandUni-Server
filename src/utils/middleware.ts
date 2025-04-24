import { NextFunction, Request, Response } from "express";

const unknownEndpoint = (_request: Request, response: Response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error: unknown, _request: Request, response: Response, next: NextFunction) => {
    console.log(error);
    if (error instanceof Error) {
        if (error.name == 'CastError') {
            response.status(400).send({ error: 'malformatted id' });
            return;
        } else if (error.name === 'ValidationError') {
            response.status(400).json({ error: error.message });
            return;
        }
    }
    next(error);
};


export default {
    errorHandler,
    unknownEndpoint
};