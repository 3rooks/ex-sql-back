import { ENTITIES } from '#constants/entities.js';
import { RepositoryRegister } from '#database/repositories/repository.register.js';

export class DANService {
    constructor() {
        this.dan = ENTITIES.DAN;
        this.repo = RepositoryRegister.repositories;
    }
}
