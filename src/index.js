import '#config/env.js';
import { application } from '#application/express.js';
import { httpServer } from '#config/http.js';
import { Database } from '#database/database.js';

const bootstrap = async () => {
    await Database.connect(process.env.MONGO_URI);
    httpServer(application, Number(process.env.PORT));
};

bootstrap();
