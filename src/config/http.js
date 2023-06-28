import { createServer } from 'http';

export const httpServer = (app, port) => {
    const http = createServer(app);
    http.listen(port, () => console.log(`Connected on port: ${port}`));
};
