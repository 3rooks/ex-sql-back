import { DANRepository } from '#database/repositories/dan.repository.js';
import { GUPRepository } from '#database/repositories/gup.repository.js';
import { PersonRepository } from '#database/repositories/person.repository.js';

export class PersonService {
    constructor() {
        this.repository = new PersonRepository();
        this.gup = new GUPRepository();
        this.dan = new DANRepository();
    }

    createPerson = async (person) => {
        const studies = {
            gup: this.gup.create()._id,
            dan: this.dan.create()._id
        };

        return await this.repository.createPerson({ ...person, studies });
    };
}
