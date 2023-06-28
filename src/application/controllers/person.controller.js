import { PersonService } from '#application/services/person.service.js';

export class PersonController {
    constructor() {
        this.service = new PersonService();
    }

    create = async (req, res, next) => {
        try {
            console.log();
        } catch (error) {
            next(error);
        }
    };

    delete = async (req, res, next) => {
        try {
            console.log();
        } catch (error) {
            next(error);
        }
    };
}
