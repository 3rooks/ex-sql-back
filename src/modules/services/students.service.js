export class StudentsService {
    constructor(repository) {
        this._repo = repository;
    }

    async createStudent(student) {
        return await this._repo.createStudent(student);
    }

    async getAllStudents() {
        return await this._repo.getAllStudents();
    }

    async getStudentById(studentId) {
        return await this._repo.getStudentById(studentId);
    }

    async updateStudent(studentId, student) {
        return await this._repo.updateStudent(studentId, student);
    }

    async deleteStudent(studentId) {
        return await this._repo.deleteStudent(studentId);
    }
}
