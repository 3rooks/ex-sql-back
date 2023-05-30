import application from '#application/express.js';
import { httpServer } from '#config/http.js';
import { Database } from '#database/database.js';
import { sequelize } from '#lib/sequelize.js';

const bootstrap = async () => {
    await new Database().connect(sequelize);
    httpServer(application, Number(process.env.PORT));
};

bootstrap();
