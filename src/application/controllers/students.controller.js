import { StudentsService } from '#application/services/students.service.js';

export class Students {
    constructor() {
        this._service = new StudentsService();
    }

    createStudent = async (req, res, next) => {
        const { name, surname, belt, age, instituteId } = req.body;
        try {
            const student = await this._service.createStudent({
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

    getAllStudents = async (req, res, next) => {
        try {
            const studentss = await this._service.getAllStudents();
            res.status(200).json(studentss);
        } catch (error) {
            next(error);
        }
    };

    getStudentById = async (req, res, next) => {
        const { id } = req.params;
        try {
            const student = await this._service.getStudentById(id);
            if (student) {
                res.status(200).json(student);
            } else {
                res.status(404).json({ message: 'Estudiante no encontrado' });
            }
        } catch (error) {
            next(error);
        }
    };

    updateStudent = async (req, res, next) => {
        const { id } = req.params;
        const { name, surname, belt, age, instituteId } = req.body;
        try {
            const student = await this._service.updateStudent(id);
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

    deleteStudent = async (req, res, next) => {
        const { id } = req.params;
        try {
            const student = await this._service.deleteStudent(id);
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
}
