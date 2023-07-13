import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const MAIN_PATH = dirname(fileURLToPath(import.meta.url));

export const FILES_PATH = resolve(MAIN_PATH, '../archives');
export const ROUTES_PATH = join(
    MAIN_PATH,
    '../application/routes/**/*.routes.js'
);
