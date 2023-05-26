import { dbConnection } from '#config/db.js';
import { httpServer } from '#config/http.js';

const PORT = 8080;

const bootstrap = () => {
    httpServer.listen(PORT, async () => {
        await dbConnection();
        console.log(`listening on port: ${PORT}`);
    });
};

bootstrap();
