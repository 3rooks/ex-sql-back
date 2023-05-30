import { HttpServer } from '#config/http.js';
import { Database } from '#database/database.js';
import application from '#src/application/express.js';
import { sequelize } from './lib/sequelize.js';

class Bootstrap {
    static async start() {
        await new Database().connect(sequelize);
        HttpServer.connect(application, Number(process.env.PORT));
    }
}

Bootstrap.start();
