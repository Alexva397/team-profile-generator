# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)


## Description

 This App is designed to generate a Team Profile webpage for your current team.

 The app is ran on the command line using Node.js

 It provides the viewer with information regarding contacting team members, and organizes them on a simple webpage.

 Each Team member's role, ID number and email are displayed. As well as additional information based on their role.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Video](#video)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#test)
- [Questions](#questions)


## Installation

  The Repo contains a package.json file that includes all dependencies.

  In order to run the application, navigate to the directory on your command line and run: 
  
  ```
  npm i
  ```

  This will install the inquirer package to this directory and allow for full functionality.

  This will also install the jest package to run all tests included in the Repository


## Usage

Once The Inquirer package is installled, The user can run the program on the command line by entering the following:

```
node index.js
```

After this command is ran, the user will be presented with prompts. 

The first series of prompts are about the team manager.

The user will then be asked to add a new team member.

*Note: If the user chooses to not add anymore team members, the profile page will generate with just a manager.

By selecting an Engineer or Intern, the user will be asked a specific question based on the role.

Once the user has completed entering their entire team, select `There are no more team members.` and the html file will generate to the /dist folder of the repository.



## Video

[![Demo Video](https://img.youtube.com/vi/6rX_Z5B0xKQ/0.jpg)](https://www.youtube.com/watch?v=6rX_Z5B0xKQ)


## Contributing 

If you would like to contribute to the repository, please fork and submit pull requests. All pull requests will be reviewed and approved/denied by the owner of the repository.


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)



## Tests

Tests have been created for the creation of the following team member classes and subclasses:
- Employee
- Manager
- Engineer
- Intern

In order to run these tests, Navigate to the directory, ensure your dependencies have already been installed, and run:

```
npm run test
```



## Questions

  If you have any questions regarding the repo, please contact me at one of the following:
    
  [Github](https://github.com/Alexva397)

  [LinkedIn](https://www.linkedin.com/in/alexander-vadeboncoeur-287039aa/)

  [asvadeboncoeur@gmail.com](mailto:asvadeboncoeur@gmail.com)
