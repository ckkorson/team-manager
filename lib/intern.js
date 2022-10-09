const Employee = require('./employee');

class Intern extends Employee {
    constructor(employeeName, id, email, role, school) {
        super(employeeName, id, email, role)
        this.school = school
    }
    getSchool() {
        return `School: ${this.school}`
    }
}

module.exports = Intern