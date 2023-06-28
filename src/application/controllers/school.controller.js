import { SchoolService } from '#application/services/school.service.js';

export class SchoolController {
    constructor() {
        this.service = new SchoolService();
    }

    create = async (req, res, next) => {
        try {
            const exist = await this.service.getSchoolByName(req.body.name);

            if (exist) return res.status(200).json(exist);

            const created = await this.service.createSchool(req.body);

            return res.status(201).json(created);
        } catch (error) {
            next(error);
        }
    };

    update = async (req, res, next) => {
        try {
            const school = await this.service.updateSchoool(
                req.params.schoolId,
                req.body
            );

            res.status(200).json(school);
        } catch (error) {
            next(error);
        }
    };

    getByName = async (req, res, next) => {
        try {
            const exist = await this.service.getSchoolByName(req.body.name);

            if (exist) return res.status(200).json(exist);

            return res.status(404).json({ errors: 'SCHOOL_NOT_FOUND' });
        } catch (error) {
            next(error);
        }
    };
}
