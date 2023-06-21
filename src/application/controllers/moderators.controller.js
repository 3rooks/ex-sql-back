import { ModeratorsService } from '#application/services/moderator.service.js';
import { compareHash, createHash } from '#lib/bcript.js';
import { signAsync } from '#lib/jwt.js';

export class ModeratorsController {
    constructor() {
        this.service = new ModeratorsService();
    }

    register = async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const exist = await this.service.getModByEmail(email);

            if (exist) return res.status(409).json(exist);

            const created = await this.service.createMod({
                email,
                password: await createHash(password)
            });

            return res.status(201).json(created);
        } catch (error) {
            next(error);
        }
    };

    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const exist = await this.service.getModByEmail(email);
            if (!exist) return res.status(401).json({ error: 'unauthorized' });

            const chackPass = await compareHash(password, exist);
            if (!chackPass)
                return res.status(401).json({ error: 'unauthorized' });

            const payload = { id: exist.id };
            const token = await signAsync(payload);

            return res.status(200).json({ token });
        } catch (error) {
            next(error);
        }
    };
}
