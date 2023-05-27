import { MODELS } from '#models/models.js';

export class Repository {
    constructor(models) {
        this.models = models;
    }

    async create(entity, data) {
        return await this.models[entity].create(data);
    }

    async getAll(entity) {
        return await this.models[entity].findAll();
    }

    async getById(entity, id) {
        return await this.models[entity].findByPk(id);
    }

    async updateById(entity, id, data) {
        return await this.models[entity].update(data, { where: { id } });
    }

    async deleteById(entity, id) {
        return await this.models[entity].destroy({ where: { id } });
    }
}

const repository = new Repository(MODELS);
console.log(repository);
