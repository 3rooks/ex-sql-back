import { application } from '#application/express.js';
import '#config/env.js';
import { httpServer } from '#config/http.js';
import { db } from '#database/database.js';

const bootstrap = async () => {
    await db.setPersistence(process.env.PERSISTENCE);
    await db.connection(process.env.MONGO_URI);
    httpServer(application, Number(process.env.PORT));
};

bootstrap();
