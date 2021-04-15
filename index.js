// include packages
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const managerInfo = () => {
    return inquirer.prompt([
        // {
        //     name: 'intro',
        //     type: 'confirm',
        //     message: 'Please answer the following questions about the team manager.\nPress y to begin.',
        //     validate: function(response) {
        //         if(response !== 'y') {
        //             return;
        //         }
        //         return true;
        //     }
        // },
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

const createManager = (data) => {
    const managerName = data.name;
    const managerID = data.id;
    const managerEmail = data.email;
    const offficeNum = data.office;
    const newManager = new Manager(managerName, managerID, managerEmail, offficeNum);
    teamArray.push(newManager);
    addTeamMember();
};


const addTeamMember = () => {
    inquirer.prompt([
        {
            name: 'newMember',
            type: 'list',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Intern', 'There are no more members.'],
        },
    ])
    .then((data) => {
        console.log(data.newMember);
    })
}






const init = () => {
    console.log('Welcome to the Team Profile Generator!\n----------------------------------------');
    managerInfo()
    // .then((data) => console.log(data))
    .then((data) => createManager(data))
    .catch((err) => console.error(err));
};



// Function call to initialize app
init();