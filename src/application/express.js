import express from 'express';
import coachRoutes from './routes/coaches.routes.js';
import instituteRoutes from './routes/institutes.routes.js';
import studentRoutes from './routes/students.routes.js';

const application = express();

// middlewares
application.use(express.json());
application.use(express.urlencoded({ extended: true }));

// routes
application.use('/api/v1', coachRoutes);
application.use('/api/v1', studentRoutes);
application.use('/api/v1', instituteRoutes);

// handle error
application.use((err, req, res, next) => {
    res.err = {
        message: err.message,
        stack: err.stack
    };
    next(err);
});
application.use((err, req, res, next) => {
    return res.status(500).send(err.message);
});

export default application;
