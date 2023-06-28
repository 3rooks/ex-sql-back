import { registerModSchema } from '#application/middlewares/dto/schemas/moderator.schema.dto.js';
import { schoolSchemaDTO } from '#application/middlewares/dto/schemas/school.schema.dto.js';
import { moderators } from './moderators.js';
import { schools } from './schools.js';

export const DOCUMENTATION = {
    openapi: '3.0.0',
    info: { title: 'Tkw documentation', version: '1.0.0' },
    paths: {
        _Moderators: 'moderators',
        ...moderators,
        _Persons: 'persons',
        _Schools: 'schools',
        ...schools
    },
    components: {
        schemas: {
            Moderator: registerModSchema,
            School: schoolSchemaDTO
        },
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        },
        requestBodies: {
            schoolSchemaDTO
        },
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
    tags: ['Moderators', 'Persons', 'Schools']
};
