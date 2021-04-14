const Employee = require('./Employee');

// Extends Employee class w/ Engineer info
class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    }

    getGithub() {
        return `${this.githubUsername}`;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;