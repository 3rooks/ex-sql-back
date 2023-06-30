import {
    loginSchemaDTO,
    registerSchemaDTO,
    updateEmailSchemaDTO,
    updatePasswordSchemaDTO
} from '#application/middlewares/dto/schemas/moderator.schema.dto.js';
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
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        },
        schemas: {
            RegisterModerator: registerSchemaDTO,
            LoginModerator: loginSchemaDTO,
            UpdateModeratorEmail: updateEmailSchemaDTO,
            UpdateModeratorPassword: updatePasswordSchemaDTO,
            CreateSchool: schoolSchemaDTO
        },
        responseBodies: {
            AuthToken: {
                type: 'object',
                example: { token: 'JWT' }
            },
            Moderator: {
                example: {
                    _id: 'string',
                    email: 'string',
                    password: 'stringst',
                    role: 'string',
                    isActive: 'boolean',
                    createdAt: 'Date',
                    updatedAt: 'Date'
                }
            },
            ModeratorCreated: {
                example: {
                    results: 'MODERATOR_CREATED'
                }
            },
            ModeratorUpdated: {
                example: {
                    results: 'MODERATOR_UPDATED'
                }
            },
            ModeratorConflict: {
                example: {
                    results: 'MODERATOR_EXISTS'
                }
            }
        },
        responseErrorBodies: {
            Unauthorized: {
                example: { errors: 'UNAUTHORIZED' }
            },
            WrongFields: {
                example: { errors: ['wrong fields...'] }
            }
        }
    },
    tags: ['Moderators', 'Persons', 'Schools']
};
