const PERSISTENCES = {
    MONGO: 'mongo',
    POSTGRES: 'postgres'
};

export class FactoryDAO {
    static setPersistence = async (persistence) => {
        switch (persistence) {
            case PERSISTENCES.MONGO: {
                const { MongooseFactory } = await import(
                    '#database/dao/mongoose.js'
                );
                return new MongooseFactory()
            }

            case PERSISTENCES.POSTGRES: {
                const { SequelizeFactory } = await import(
                    '#database/dao/sequelize.js'
                );
                return new SequelizeFactory()
            }

            default: {
                throw new Error('DAO_ISNT_DEFINED');
            }
        }
    };
}
