import { moderators } from '#modules/services.module.js';

export const createModeratorCtrl = async (req, res, next) => {
    try {
        const results = await moderators.createModerator(req.body);

        return res.json({ results });
    } catch (error) {
        next(error);
    }
};
