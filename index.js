// include packages
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerPrompt = () => {
    return inquirer.prompt([
        {
            name: 'intro',
            type: 'confirm',
            message: 'Please answer the following questions about the team manager.\nPress y to begin.',
            validate: function(response) {
                if(response !== 'y') {
                    return;
                }
                return true;
            }
        },
        {
            name: 'name',
            type: 'input',
            message: 'What is their name?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is their ID number?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is their email address?',
        },
        {
            name: 'office',
            type: 'input',
            message: 'What is their office number?',
        },
    ])
};
















const init = () => {
    console.log('Welcome to the Team Profile Generator!\n----------------------------------------');
    managerPrompt()
    .then(console.log(data));
};



// Function call to initialize app
init();