export class StudentsService {
    constructor(repository) {
        this._repo = repository;
    }

    createStudent = async (student) => {
        return await this._repo.createStudent(student);
    };

    getAllStudents = async () => {
        return await this._repo.getAllStudents();
    };

    getStudentById = async (studentId) => {
        return await this._repo.getStudentById(studentId);
    };

    updateStudent = async (studentId, student) => {
        return await this._repo.updateStudent(studentId, student);
    };

    deleteStudent = async (studentId) => {
        return await this._repo.deleteStudent(studentId);
    };
}
