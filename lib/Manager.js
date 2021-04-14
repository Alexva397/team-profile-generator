const Employee = require('./Employee');

// Extends Employee class w/ Manager info
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return `${this.officeNumber}`;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;