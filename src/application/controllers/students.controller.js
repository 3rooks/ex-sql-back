import { studentsService } from '#application/services/students.service.js';

export const createStudent = async (req, res, next) => {
    const { name, surname, belt, age, instituteId } = req.body;
    try {
        const student = await studentsService.createStudent({
            name,
            surname,
            belt,
            age,
            instituteId
        });
        res.status(201).json(student);
    } catch (error) {
        next(error);
    }
};

export const getAllStudents = async (req, res, next) => {
    try {
        const students = await studentsService.getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        next(error);
    }
};

export const getStudentById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const student = await studentsService.getStudentById(id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: 'Estudiante no encontrado' });
        }
    } catch (error) {
        next(error);
    }
};

export const updateStudent = async (req, res, next) => {
    const { id } = req.params;
    const { name, surname, belt, age, instituteId } = req.body;
    try {
        const student = await studentsService.updateStudent(id);
        if (student) {
            await student.update({
                name,
                surname,
                belt,
                age,
                instituteId
            });
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: 'Estudiante no encontrado' });
        }
    } catch (error) {
        next(error);
    }
};

export const deleteStudent = async (req, res, next) => {
    const { id } = req.params;
    try {
        const student = await studentsService.deleteStudent(id);
        if (student) {
            await student.destroy();
            res.status(200).json({
                message: 'Estudiante eliminado exitosamente'
            });
        } else {
            res.status(404).json({ message: 'Estudiante no encontrado' });
        }
    } catch (error) {
        next(error);
    }
};
