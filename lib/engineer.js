const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeName, id, email, role, github) {
        super(employeeName, id, email, role)
        this.github = github
    }
    getGithub() {
        return `Github: ${this.github}`
    }
}

module.exports = Engineer