import '#config/env.js';
import { application } from '#application/express.js';
import { httpServer } from '#config/http.js';
import { sequelize } from '#database/dao/sequelize.js';
import { Database } from '#database/database.js';

const bootstrap = async () => {
    await Database.connect(sequelize);
    httpServer(application, Number(process.env.PORT));
};

bootstrap();
