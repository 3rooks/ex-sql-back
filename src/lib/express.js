import express from 'express';

const expressApp = express();
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use('/api', (req, res) => {
    return res.json({ works: 'works' });
});

expressApp.use((err, req, res, next) => {
    res.err = {
        message: err.message,
        stack: err.stack
    };
    next(err);
});
expressApp.use((err, req, res, next) => {
    return res.status(500).send(err.message);
});

export default expressApp;
