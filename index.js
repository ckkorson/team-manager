const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/employee')
const startBuilding = () => {
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
        },
        {
            type: 'list',
            name: 'addMore',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No'] 
        }
    ])
    .then((data) => {
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
            <main>
                <div class="card">
                    <div class="card-header">
                        <h2>${data.employeeName}</h2>
                        <h3>${data.role}</h3>
                    </div>
                    <div>
                        <ul>
                            <li>ID: ${data.id}</li>
                            <li>Email: ${data.email}</li>
                            <li>Office number: 1</li>
                        </ul>
                    </div>
                </div>`,
        (err) => err ? console.log(err) : console.log('index.html created!'))
        if(data.addMore == 'Yes') {
            moreEmployees()
        }else{
            fs.appendFile('./dist/index.html',
            `       </main>
                </body>
                </html>`,
                (err) => err ? console.log(err) : console.log('index.html created!'))
        }
    }) 
}

const moreEmployees = () => {
    // let i = 'Yes'
    // while(i = 'Yes'){
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
        },
        {
            type: 'list',
            name: 'addMore',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No'] 
        }
    ])
    .then((data) => {
        fs.appendFile('./dist/index.html',
        `<div class="card">
                    <div class="card-header">
                        <h2>${data.employeeName}</h2>
                        <h3>${data.role}</h3>
                    </div>
                    <div>
                        <ul>
                            <li>ID: ${data.id}</li>
                            <li>Email: ${data.email}</li>
                            <li>Office number: 1</li>
                        </ul>
                    </div>
                </div>`,
            (err) => err ? console.log(err) : console.log('New employee added!'))
        if(data.addMore == 'Yes') {
            moreEmployees()
        } else {
            fs.appendFile('./dist/index.html',
            `\n</main>
            </body>
            </html>`,
            (err) => err ? console.log(err) : console.log('index.html finished!'))
        }
    })
// }
}

// startBuilding()
const employee = new Employee()
let email
employee.getName(email).then((data) => {
    console.log(data)
})
