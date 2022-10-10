const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const genericQuestions = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Enter employee name'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Select employee role',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email address'
        }
    ])
    .then((data) => {
        if(data.role === 'Manager') {
            let manager = new Manager(data.employeeName, data.id, data.email, data.role, 'Office Number')
            addManager(manager)
        } else if(data.role === 'Engineer') {
            let engineer = new Engineer(data.employeeName, data.id, data.email, data.role, 'Github')
            addEngineer(engineer)
        } else if(data.role === 'Intern') {
            let intern = new Intern(data.employeeName, data.id, data.email, data.role, 'School')
            addIntern(intern)
        }
    })
}

const addNewEmployee = (employee) => {
    fs.appendFile('./dist/index.html', 
            `\n\t\t\t<div class="card">
                <div class="card-header">
                    <h2>${employee.getName()}</h2>
                    <h3>${employee.getRole()}</h3>
                </div>
                <div>
                    <ul>
                        <li>ID: ${employee.getId()}</li>
                        <li>Email: <a href="mailto: ${employee.getEmail()}"> ${employee.getEmail()}</a></li>
                        <li>${pickSpecial(employee)}</li>
                    </ul>
                </div>
            </div>`,
        (err) => err ? console.log(err) : console.log('Employee added!\n'))
}

const pickSpecial = (employee) => {
    if(employee.role === 'Manager'){
        return employee.getOffice()
    } else if(employee.role === 'Engineer') {
        return employee.getGithub()
    } else {
        return employee.getSchool()
    }
}

const addManager = (manager) => {
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter manager office number'
            },
            {
                type: 'list',
                name: 'addMore',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No']
            }
        ])
        .then((data) => {
            manager.officeNumber = data.officeNumber
            addNewEmployee(manager)
            if(data.addMore === 'Yes') {
                genericQuestions()
            } else {
                finishIndex()
            }
        })
}

const addEngineer = (engineer) => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Enter engineer GitHub username'
            },
            {
                type: 'list',
                name: 'addMore',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No']
            }
        ])
        .then((data) => {
            engineer.github = data.github
            addNewEmployee(engineer)
            if(data.addMore === 'Yes') {
                genericQuestions()
            } else {
                finishIndex()
            }
        })
}

const addIntern = (intern) => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'Enter intern school'
            },
            {
                type: 'list',
                name: 'addMore',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No']
            }
        ])
        .then((data) => {
            intern.school = data.school
            addNewEmployee(intern)
            if(data.addMore === 'Yes') {
                genericQuestions()
            } else {
                finishIndex()
            }
        })
}

const startBuilding = () => {
        setUpIndex()
        genericQuestions()
}

const finishIndex = () => {
    fs.appendFile('./dist/index.html',
    `\n\t\t</main>
    </body>
    </html>`,
    (err) => err ? console.log(err) : console.log('index.html finished!'))
}

const setUpIndex = () => {
    fs.writeFile('./dist/index.html',
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="jumbotron">
            <h1>My Team</h1>
        </header>
        <main>`, (err) => err ? console.log(err) : console.log('index.html created!\n'))
}

startBuilding()