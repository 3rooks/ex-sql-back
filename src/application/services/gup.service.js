import { ENTITIES } from '#constants/entities.js';
import { RepositoryRegister } from '#database/repositories/repository.register.js';

export class GUPService {
    constructor() {
        this.gup = ENTITIES.GUP;
        this.repo = RepositoryRegister.repositories;
    }

    createGup = async () => {
        return await this.repo[this.gup].createGup();
    };
}
