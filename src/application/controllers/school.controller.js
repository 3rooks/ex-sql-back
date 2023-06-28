import { SchoolService } from '#application/services/school.service.js';

export class SchoolController {
    constructor() {
        this.service = new SchoolService();
    }

    create = async (req, res, next) => {
        try {
            console.log();
        } catch (error) {
            next(error);
        }
    };

    update = async (req, res, next) => {
        try {
            console.log();
        } catch (error) {
            next(error);
        }
    };
}
