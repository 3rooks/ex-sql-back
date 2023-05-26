import { httpServer } from '#config/http.js';

const PORT = 8080;

const bootstrap = () => {
    httpServer.listen(PORT, () => {
        console.log(`listening on port: ${PORT}`);
    });
};

bootstrap();
