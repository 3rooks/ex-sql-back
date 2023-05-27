import { createServer } from 'http';

export class HttpServer {
    static connect(app, port) {
        const http = createServer(app);
        http.listen(port, () => console.log(`connected on port: ${port}`));
    }
}
