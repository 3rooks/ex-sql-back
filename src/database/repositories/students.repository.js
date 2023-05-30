import { ENTITIES } from '#constants/entities.js';
import { Database } from '#database/database.js';
import { StudentsModel } from '#database/models/students.model.js';

export class StudentsRepository extends Database {
    constructor() {
        super();
        this._entity = ENTITIES.STUDENTS;
        this.models[ENTITIES.STUDENTS] = StudentsModel;
    }

    async createStudent(student) {
        return await this.__create(this._entity, student);
    }

    async getAllStudents() {
        return await this.__getAll(this._entity);
    }

    async getStudentById(studentId) {
        return await this.__getById(this._entity, studentId, {
            include: 'instituteData'
        });
    }

    async updateStudent(studentId, student) {
        return this.__updateById(this._entity, studentId, student);
    }

    async deleteStudent(studentId) {
        return await this.__deleteById(this._entity, studentId);
    }
}
