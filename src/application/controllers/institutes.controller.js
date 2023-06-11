import { institutes } from '#modules/services.module.js';

export const createInstitute = async (req, res, next) => {
    try {
        const instituteData = req.body;
        const createdInstitute = await institutes.createInstitute(
            instituteData
        );
        res.status(201).json(createdInstitute);
    } catch (error) {
        next(error);
    }
};

export const getAllInstitutes = async (req, res, next) => {
    try {
        const institutess = await institutes.getAllInstitutes();
        res.json(institutess);
    } catch (error) {
        next(error);
    }
};

export const getInstituteById = async (req, res, next) => {
    try {
        const instituteId = req.params.id;
        const institute = await institutes.getInstituteById(instituteId);
        res.json(institute);
    } catch (error) {
        next(error);
    }
};

export const updateInstitute = async (req, res, next) => {
    try {
        const instituteId = req.params.id;
        const updatedInstituteData = req.body;
        const updatedInstitute = await institutes.updateInstitute(
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
        await institutes.deleteInstitute(instituteId);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};
