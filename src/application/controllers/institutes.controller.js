import { institutesService } from '#application/services/institutes.service.js';

export const createInstitute = async (req, res, next) => {
    try {
        const instituteData = req.body;
        const createdInstitute = await institutesService.createInstitute(
            instituteData
        );
        res.status(201).json(createdInstitute);
    } catch (error) {
        next(error);
    }
};

export const getAllInstitutes = async (req, res, next) => {
    try {
        const institutes = await institutesService.getAllInstitutes();
        res.json(institutes);
    } catch (error) {
        next(error);
    }
};

export const getInstituteById = async (req, res, next) => {
    try {
        const instituteId = req.params.id;
        const institute = await institutesService.getInstituteById(instituteId);
        res.json(institute);
    } catch (error) {
        next(error);
    }
};

export const updateInstitute = async (req, res, next) => {
    try {
        const instituteId = req.params.id;
        const updatedInstituteData = req.body;
        const updatedInstitute = await institutesService.updateInstitute(
            instituteId,
            updatedInstituteData
        );
        res.json(updatedInstitute);
    } catch (error) {
        next(error);
    }
};

export const deleteInstitute = async (req, res, next) => {
    try {
        const instituteId = req.params.id;
        await institutesService.deleteInstitute(instituteId);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};
