import { ModeratorService } from '#application/services/moderator.service.js';

import { compareHash } from '#lib/bcript.js';
import { signAsync } from '#lib/jwt.js';

export class ModeratorController {
    constructor() {
        this.service = new ModeratorService();
    }

    register = async (req, res, next) => {
        try {
            const moderator = await this.service.getModeratorByEmail(req.body);

            if (!moderator) {
                await this.service.createModerator(req.body);
                return res.status(201).json({ results: 'MODERATOR_CREATED' });
            }

            return res.status(409).json({ results: 'MODERATOR_EXISTS' });
        } catch (error) {
            next(error);
        }
    };

    login = async (req, res, next) => {
        try {
            const moderator = await this.service.getModeratorByEmail(req.body);

            if (!moderator)
                return res.status(401).json({ errors: 'UNAUTHORIZED' });

            if (!(await compareHash(req.body.password, moderator.password)))
                return res.status(401).json({ errors: 'UNAUTHORIZED' });

            return res
                .status(200)
                .json({ token: await signAsync({ id: moderator._id }) });
        } catch (error) {
            next(error);
        }
    };

    updateEmail = async (req, res, next) => {
        try {
            const moderator = await this.service.getModeratorById(req.id);

            if (!moderator)
                return res.status(401).json({ errors: 'UNAUTHORIZED' });

            return res.status(200).json({
                results: await this.service.updateEmail(req.id, req.body)
            });
        } catch (error) {
            next(error);
        }
    };

    updatePassword = async (req, res, next) => {
        try {
            const moderator = await this.service.getModeratorById(req.id);

            if (!moderator)
                return res.status(401).json({ errors: 'UNAUTHORIZED' });

            if (!(await compareHash(req.body.oldPassword, moderator.password)))
                return res.status(401).json({ errors: 'UNAUTHORIZED' });

            return res.status(200).json({
                results: await this.service.updatePassword(req.id, req.body)
            });
        } catch (error) {
            next(error);
        }
    };

    getModerator = async (req, res, next) => {
        try {
            const moderator = await this.service.getModeratorById(req.id);

            if (!moderator)
                return res.status(401).json({ errors: 'UNAUTHORIZED' });

            return res.status(200).json({ results: moderator });
        } catch (error) {
            next(error);
        }
    };
}
