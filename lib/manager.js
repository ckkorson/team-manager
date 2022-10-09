const Employee = require("./employee");

class Manager extends Employee {
    constructor(employeeName, id, email, role, officeNumber) {
        super(employeeName, id, email, role);
        this.officeNumber = officeNumber;
    }
    getOffice() {
        return `Office Number: ${this.officeNumber}`;
    }
}

module.exports = Manager;