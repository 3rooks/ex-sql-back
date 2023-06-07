import { PERSISTENCES } from '#constants/persistence.js';
import { MONGO_FILE_DAO } from './mongo.dao.js';
import { POSTGRES_FILE_DAO } from './postgres.dao.js';

export class FactoryDAO {
    async createDAO(persistence) {
        switch (persistence) {
            case PERSISTENCES.MONGO: {
                const { MongoDAO } = await import(MONGO_FILE_DAO);
                return new MongoDAO();
            }

            case PERSISTENCES.POSTGRES: {
                const { PostgresDAO } = await import(POSTGRES_FILE_DAO);
                return new PostgresDAO();
            }

            default: {
                throw new Error('NO_PERSISTENCE');
            }
        }
    }
}
