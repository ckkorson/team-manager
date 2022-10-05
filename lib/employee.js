class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = this.getName()
        this.id = this.getId()
        this.email = this.getEmail()
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
            console.log(data.employeeName)
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
            console.log(data.id)
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
            console.log(data.email)
        })
    }

    getRole() {

    }
}

module.exports = Employee