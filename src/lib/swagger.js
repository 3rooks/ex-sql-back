import {
    loginSchemaDTO,
    registerSchemaDTO,
    updateEmailSchemaDTO,
    updatePasswordSchemaDTO
} from '#application/middlewares/dto/schemas/moderator.schema.dto.js';
import { schoolSchemaDTO } from '#application/middlewares/dto/schemas/school.schema.dto.js';
import { ROUTES_PATH } from '#utils/paths.js';
import swaggerJsDoc from 'swagger-jsdoc';

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'TKW',
            version: '1.0.0',
            description: 'Endpoints Documentation'
        },
        tags: ['Moderators', 'Persons', 'Schools'],
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
                Unauthorized: {
                    example: { errors: 'UNAUTHORIZED' }
                },
                WrongFields: {
                    example: { errors: ['wrong fields...'] }
                },
                AuthToken: {
                    example: {
                        token: 'JWT'
                    }
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
                },
                School: {
                    example: {
                        results: [
                            {
                                _id: 'string',
                                name: 'string',
                                director: 'string',
                                locality: 'string',
                                province: 'boolean',
                                legalEntity: 'string',
                                isActive: 'boolean',
                                createdAt: 'Date',
                                updatedAt: 'Date'
                            }
                        ]
                    }
                }
            }
        }
    },
    apis: [ROUTES_PATH]
};

export const swaggerDoc = swaggerJsDoc(options);
