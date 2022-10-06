const inquirer = require('inquirer')

class Employee {
    constructor() {
        // this.employeeName = this.getName()
        // this.id = this.getId()
        // this.email = this.getEmail()
    }

    getName() {
        inquirer.prompt (
            {
                type: 'input',
                name: 'employeeName',
                message: 'Enter employee name'
            }
        )
        .then((data) => {
            // return data.employeeName
            this.getId()
        })
    }

    getId() {
        inquirer.prompt (
            {
                type: 'input',
                name: 'id',
                message: 'Enter employee id'
            }
        )
        .then((data) => {
            // return data.id
            this.getEmail()
        })
    }

    getEmail() {
        inquirer.prompt (
            {
                type: 'input',
                name: 'email',
                message: 'Enter employee email'
            }
        )
        .then((data) => {
            return data.email
        })
    }

    getRole() {

    }
}

module.exports = Employee