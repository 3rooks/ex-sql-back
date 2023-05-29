import { SERVICES } from '#src/services/services.js';

const { studentsService } = SERVICES;

export class StudentsController {
    createStudent = async (req, res) => {
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
            console.error(error);
            res.status(500).json({ message: 'Error al crear el estudiante' });
        }
    };

    getAllStudents = async (req, res) => {
        try {
            const students = await studentsService.getAllStudents();
            res.status(200).json(students);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error al obtener los estudiantes'
            });
        }
    };

    getStudentById = async (req, res) => {
        const { id } = req.params;
        try {
            const student = await studentsService.getStudentById(id);
            if (student) {
                res.status(200).json(student);
            } else {
                res.status(404).json({ message: 'Estudiante no encontrado' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el estudiante' });
        }
    };

    updateStudent = async (req, res) => {
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
            console.error(error);
            res.status(500).json({
                message: 'Error al actualizar el estudiante'
            });
        }
    };

    deleteStudent = async (req, res) => {
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
            console.error(error);
            res.status(500).json({
                message: 'Error al eliminar el estudiante'
            });
        }
    };
}
