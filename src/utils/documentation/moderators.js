export const moderators = {
    '/api/v1/moderators/register': {
        post: {
            summary: 'Create an moderator',
            tags: ['Moderators'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            $ref: '#/components/schemas/Moderator'
                        }
                    }
                }
            },
            responses: {
                201: {
                    description: 'post movie',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseBodies/PostMovie'
                            }
                        }
                    }
                },
                400: {
                    description: 'Errors (Bad request)',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseErrorBodies/WrongFields'
                            }
                        }
                    }
                },
                409: {
                    description: 'movie conflic',
                    content: {
                        'application/json': {
                            type: 'object',
                            $ref: '#/components/responseErrorBodies/MovieConflict'
                        }
                    }
                }
            }
        }
    },
    '/api/v1/moderators/login': {
        post: {
            summary: 'Loging moderator',
            tags: ['Moderators'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            $ref: '#/components/schemas/Moderator'
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'Login succesfully',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseBodies/ModAuth'
                            }
                        }
                    }
                }
            }
        }
    },
    '/api/v1/moderators/{moderatorId}': {
        get: {
            summary: 'Return movie by ID',
            tags: ['Moderators'],
            parameters: [
                {
                    name: 'movieId',
                    in: 'path',
                    required: true,
                    description: 'ID movie (uuidV4)',
                    type: 'string'
                }
            ],
            responses: {
                200: {
                    description: 'get movie by id',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseBodies/GetMovieBy'
                            }
                        }
                    }
                },
                400: {
                    description: 'Invalid Params Fields - Bad Request',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseErrorBodies/WrongFields'
                            }
                        }
                    }
                },
                404: {
                    description: 'Movie not found',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseErrorBodies/MovieNotFound'
                            }
                        }
                    }
                }
            }
        },
        put: {
            summary: 'put movie',
            tags: ['Moderators'],
            parameters: [
                {
                    name: 'movieId',
                    in: 'path',
                    required: true,
                    description: 'ID movie (uuidV4)',
                    type: 'string'
                }
            ],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            $ref: '#/components/requestBodies/PostMovie'
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'put movie',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseBodies/DeleteMovie'
                            }
                        }
                    }
                },
                400: {
                    description: 'Errors (Bad request)',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseErrorBodies/WrongFields'
                            }
                        }
                    }
                },
                404: {
                    description: 'character | movie not found',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseErrorBodies/BothNotFound'
                            }
                        }
                    }
                },
                409: {
                    description: 'character conflict',
                    content: {
                        'application/json': {
                            type: 'object',
                            $ref: '#/components/responseErrorBodies/CharacterConflict'
                        }
                    }
                }
            }
        },
        delete: {
            summary: 'delete movie',
            tags: ['Moderators'],
            parameters: [
                {
                    name: 'movieId',
                    in: 'path',
                    required: true,
                    description: 'ID movie (uuidV4)',
                    type: 'string'
                }
            ],
            responses: {
                200: {
                    description: 'delete movie',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseBodies/DeleteMovie'
                            }
                        }
                    }
                },
                400: {
                    description: 'Errors (Bad request)',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseErrorBodies/WrongFields'
                            }
                        }
                    }
                },
                404: {
                    description: 'Movie not found',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseErrorBodies/MovieNotFound'
                            }
                        }
                    }
                }
            }
        }
    }
};
