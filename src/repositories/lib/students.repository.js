export class StudentsRepository {
    /**
     *
     * @param {Database} database
     * @param {string} entity
     */
    constructor(database, entity) {
        this._entity = entity;
        this._db = database;
    }

    async createStudent(student) {
        return await this._db.create(this._entity, student);
    }

    async getAllStudents() {
        return await this._db.getAll(this._entity);
    }

    async getStudentById(studentId) {
        return await this._db.getById(this._entity, studentId, {
            include: 'instituteData'
        });
    }

    async updateStudent(studentId, student) {
        return await this._db.updateById(this._entity, studentId, student);
    }

    async deleteStudent(studentId) {
        return await this._db.deleteById(this._entity, studentId);
    }
}
