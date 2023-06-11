import { moderatorDTOSchema } from '#application/middlewares/dto/moderators/register.dto.js';
import { moderators } from './moderators.js';

export const DOCUMENTATION = {
    openapi: '3.0.0',
    info: { title: 'Tkw documentation', version: '1.0.0' },
    paths: {
        _Moderators: 'moderators',
        ...moderators,
        _Persons: 'persons',
        _Coaches: 'coaches',
        _Referees: 'referees',
        _Institutes: 'institutes'
    },
    components: {
        schemas: {
            Movie: {
                type: 'object',
                properties: {
                    title: { type: 'string' },
                    director: { type: 'string' },
                    year: { type: 'integer' }
                }
            },
            Moderator: moderatorDTOSchema
        },
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        },
        requestBodies: {},
        responseBodies: {
            ModAuth: {
                type: 'object',
                example: { token: '[JWT]' }
            }
        },
        responseErrorBodies: {
            Unauthorized: {
                type: 'object',
                example: { errors: 'user unauthorized' }
            },
            WrongFields: {
                type: 'object',
                example: { errors: ['Wrong fields...'] }
            },
            BothNotFound: {
                type: 'object',
                example: {
                    errors: 'Movie | Character | Gender => not found'
                }
            },
            UserConflic: {
                type: 'object',
                example: { errors: 'user conflict' }
            },
            MovieNotFound: {
                type: 'object',
                example: { errors: 'movie not found' }
            },
            MovieConflict: {
                type: 'object',
                example: { errors: 'movie conflict' }
            },
            CharacterConflict: {
                type: 'object',
                example: { errors: 'character conflict' }
            },
            CharacterNotFound: {
                type: 'object',
                example: { errors: 'character not found' }
            },
            OrderNotFound: {
                type: 'object',
                example: { errors: 'ASC|DESC' }
            },
            GenderNotFound: {
                type: 'object',
                example: { errors: 'gender not found' }
            },
            GenderConflict: {
                type: 'object',
                example: { errors: 'gender conflict' }
            }
        }
    },
    tags: ['Moderators', 'Persons', 'Referees', 'Institutes']
};
