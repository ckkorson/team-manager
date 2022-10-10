const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeName, id, email, role, github) {
        super(employeeName, id, email, role)
        this.github = github
    }
    getGithub() {
        return `Github: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a>`
    }
}

module.exports = Engineer