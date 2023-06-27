import { IMG_PATH } from '#utils/paths.js';
import multer from 'multer';
import { extname } from 'path';
import uuid from 'uuid-random';

const MIMETYPES = ['image/jpeg', 'image/png', 'application/pdf'];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, IMG_PATH);
    },
    filename: (req, file, cb) => {
        // extname(file.originalname).toLowerCase()
        cb(null, `${uuid()}${extname(file.originalname)}`);
    }
});

export const upload = multer({
    storage,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        if (!MIMETYPES.includes(file.mimetype))
            cb(new Error('Incorrect image format'));
        else cb(null, true);
    }
}).single('file');
