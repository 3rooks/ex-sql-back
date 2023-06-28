import '#config/env.js';
import { Express } from '#application/express.js';
import { httpServer } from '#config/http.js';
import { Database } from '#database/database.js';

const bootstrap = async () => {
    await Database.connect(process.env.MONGO_URI);
    httpServer(new Express().app, Number(process.env.PORT));
};

bootstrap();
