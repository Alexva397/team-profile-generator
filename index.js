// include packages
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const writeHTML = require('./src/page-template');

const teamArray = [];

const managerInfo = () => {
    console.log('Please answer the following questions about the team manager:\n--------------------');
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the team manager?',
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
    // addTeamMember();
};

const addTeamMember = () => {
    inquirer.prompt([
        {
            name: 'newMember',
            type: 'list',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Intern', 'There are no more team members.'],
        },
    ])
    .then((data) => {
        const position = data.newMember;
        if (position === 'There are no more team members.') {
            // console.log(teamArray);
            fs.writeFile('./dist/view.html', writeHTML(teamArray), (err) => 
              err? console.log(err) : console.log('Successfully created view.html')
            ); 
        } else {
            inquirer.prompt([
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
                    name: 'github',
                    type: 'input',
                    message: 'What is their Github username?',
                    when: position === 'Engineer',
                },
                {
                    name: 'school',
                    type: 'input',
                    message: 'What is the school they attend?',
                    when: position === 'Intern',
                },
            ])
            .then((data) => {
                let memberName = data.name;
                let memberId = data.id;
                let memberEmail = data.email;
                if (position === 'Engineer') {
                    const memberGithub = data.github;
                    const newEngineer = new Engineer(memberName, memberId, memberEmail, memberGithub);
                    teamArray.push(newEngineer);
                } else if (position === 'Intern') {
                    const memberSchool = data.school;
                    const newIntern = new Intern(memberName, memberId, memberEmail, memberSchool);
                    teamArray.push(newIntern);
                }
            })
            .then(() => addTeamMember())
        }
    })
}

const init = () => {
    console.log('Welcome to the Team Profile Generator!\n----------------------------------------');
    managerInfo()
    // .then((data) => console.log(data))
    .then((data) => createManager(data))
    .then(() => addTeamMember())
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();