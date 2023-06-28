export const schools = {
    '/api/v1/schools': {
        post: {
            summary: 'Create a school',
            tags: ['Schools'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            $ref: '#/components/schemas/School'
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
    }
};
