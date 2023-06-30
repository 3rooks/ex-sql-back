import { ENTITIES } from '#constants/entities.js';
import { RepositoryRegister } from '#database/repositories/repository.register.js';

export class PersonService {
    constructor() {
        this.gup = ENTITIES.GUP;
        this.dan = ENTITIES.DAN;
        this.person = ENTITIES.PERSONS;
        this.repository = RepositoryRegister.repositories;
    }

    createPerson = async (person) => {
        const studies = {
            gup: await this.repository[this.gup].createGup()._id,
            dan: await this.repository[this.dan].createDan()._id
        };

        const a = await this.repository[ENTITIES.PERSONS].create({
            ...person,
            studies
        });
        console.log(a);
    };
}
