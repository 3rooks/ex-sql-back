import { InstitutesService } from '#application/services/institutes.service.js';

export class InstitutesController {
    constructor() {
        this._service = new InstitutesService();
    }

    createInstitute = async (req, res, next) => {
        try {
            const instituteData = req.body;
            const createdInstitute = await this._service.createInstitute(
                instituteData
            );
            res.status(201).json(createdInstitute);
        } catch (error) {
            next(error);
        }
    };

    getAllInstitutes = async (req, res, next) => {
        try {
            const institutess = await this._service.getAllInstitutes();
            res.json(institutess);
        } catch (error) {
            next(error);
        }
    };

    getInstituteById = async (req, res, next) => {
        try {
            const instituteId = req.params.id;
            const institute = await this._service.getInstituteById(instituteId);
            res.json(institute);
        } catch (error) {
            next(error);
        }
    };

    updateInstitute = async (req, res, next) => {
        try {
            const instituteId = req.params.id;
            const updatedInstituteData = req.body;
            const updatedInstitute = await this._service.updateInstitute(
                instituteId,
                updatedInstituteData
            );
            res.json(updatedInstitute);
        } catch (error) {
            next(error);
        }
    };

    deleteInstitute = async (req, res, next) => {
        try {
            const instituteId = req.params.id;
            await this._service.deleteInstitute(instituteId);
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    };
}
