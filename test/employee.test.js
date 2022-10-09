const Employee = require('../lib/employee')

describe('Employee', () => {
    const employee = new Employee('Caleb', 1, 'caleb.k.korson@gmail.com', 'Engineer')
    describe('getName', () => {
        it('It should return Caleb', () => {
            expect(employee.getName()).toEqual('Caleb')
        })
    })
    describe('getId', () => {
        it('It should return 1', () => {
            expect(employee.getId()).toEqual(1)
        })
    })
    describe('getEmail', () => {
        it('It should return caleb.k.korson@gmail.com', () => {
            expect(employee.getEmail()).toEqual('caleb.k.korson@gmail.com')
        })
    })
    describe('getRole', () => {
        it('It should return Engineer', () => {
            expect(employee.getRole()).toEqual('Engineer')
        })
    })
})