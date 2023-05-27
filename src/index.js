import { Database, sequelize } from '#config/db.js';
import { HttpServer } from '#config/http.js';
import expressApp from '#lib/express.js';

class Bootstrap {
    static async start() {
        await Database.connect(sequelize);
        HttpServer.connect(expressApp, Number(process.env.PORT));
    }
}

Bootstrap.start();
