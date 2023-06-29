export const moderators = {
    '/api/v1/mods/register': {
        post: {
            summary: 'Register a moderator',
            tags: ['Moderators'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/RegisterModerator'
                        }
                    }
                }
            },
            responses: {
                201: {
                    description: 'Moderator created',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseBodies/ModeratorCreated'
                            }
                        }
                    }
                },
                400: {
                    description: 'Invalid fields',
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
                    description: 'Moderator already exist',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/responseBodies/ModeratorConflict'
                            }
                        }
                    }
                }
            }
        }
    },
    '/api/v1/mods/login': {
        post: {
            summary: 'Login as a moderator',
            tags: ['Moderators'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/LoginModerator'
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
                                $ref: '#/components/responseBodies/AuthToken'
                            }
                        }
                    }
                },
                400: {
                    description: 'Invalid fields',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseErrorBodies/WrongFields'
                            }
                        }
                    }
                },
                401: {
                    description: 'Unauthorized moderator',
                    content: {
                        'application/json': {
                            type: 'object',
                            $ref: '#/components/responseErrorBodies/Unauthorized'
                        }
                    }
                }
            }
        }
    },
    '/api/v1/auth/mods': {
        get: {
            summary: 'Get moderator',
            tags: ['Moderators'],
            security: [{ bearerAuth: [] }],
            responses: {
                200: {
                    description: 'Moderator info',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/responseBodies/Moderator'
                            }
                        }
                    }
                },
                401: {
                    description: 'Unauthorized moderator',
                    content: {
                        'application/json': {
                            $ref: '#/components/responseErrorBodies/Unauthorized'
                        }
                    }
                }
            }
        }
    },
    '/api/v1/auth/update-email': {
        patch: {
            summary: 'Update moderator email',
            tags: ['Moderators'],
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/UpdateModeratorEmail'
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'Moderator updated',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/responseBodies/Moderator'
                            }
                        }
                    }
                },
                400: {
                    description: 'Invalid fields',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseErrorBodies/WrongFields'
                            }
                        }
                    }
                },
                401: {
                    description: 'Unauthorized moderator',
                    content: {
                        'application/json': {
                            type: 'object',
                            $ref: '#/components/responseErrorBodies/Unauthorized'
                        }
                    }
                }
            }
        }
    },
    '/api/v1/auth/update-password': {
        patch: {
            summary: 'Update moderator password',
            tags: ['Moderators'],
            security: [{ bearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/UpdateModeratorPassword'
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'Moderator updated',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/responseBodies/Moderator'
                            }
                        }
                    }
                },
                400: {
                    description: 'Invalid fields',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/responseErrorBodies/WrongFields'
                            }
                        }
                    }
                },
                401: {
                    description: 'Unauthorized moderator',
                    content: {
                        'application/json': {
                            type: 'object',
                            $ref: '#/components/responseErrorBodies/Unauthorized'
                        }
                    }
                }
            }
        }
    }
};
