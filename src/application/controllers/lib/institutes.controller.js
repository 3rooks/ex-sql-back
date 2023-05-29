import { SERVICES } from '#src/services/services.js';

const { institutesService } = SERVICES;

export class InstitutesController {
    async createInstitute(req, res) {
        try {
            const instituteData = req.body;
            const createdInstitute = await institutesService.createInstitute(
                instituteData
            );
            res.status(201).json(createdInstitute);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getAllInstitutes(req, res) {
        try {
            const institutes = await institutesService.getAllInstitutes();
            res.json(institutes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getInstituteById(req, res) {
        try {
            const instituteId = req.params.id;
            const institute = await institutesService.getInstituteById(
                instituteId
            );
            res.json(institute);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateInstitute(req, res) {
        try {
            const instituteId = req.params.id;
            const updatedInstituteData = req.body;
            const updatedInstitute = await institutesService.updateInstitute(
                instituteId,
                updatedInstituteData
            );
            res.json(updatedInstitute);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteInstitute(req, res) {
        try {
            const instituteId = req.params.id;
            await institutesService.deleteInstitute(instituteId);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
