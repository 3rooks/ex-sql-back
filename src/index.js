import '#config/env.js';
import { application } from '#application/express.js';
import { httpServer } from '#config/http.js';
import { db } from '#database/database.js';

const bootstrap = async () => {
    await db.connect();
    httpServer(application, Number(process.env.PORT));
};

bootstrap();
