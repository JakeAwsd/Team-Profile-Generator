// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/generateTeam');

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'list',
        name: 'team-member-type',
        message: 'What type of team member would you like to add?',
        choices: ['manager', 'Engineer', 'Intern'],
      },
      {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:',
      name: 'description'
      },
];

// TODO: Create a function to write webpage index
function writeToFile(fileName, data) {

    fs.writeFile(`${fileName}.md`, `${generateTeam(data)}`, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
      // console.log(response);
      writeToFile('README', response);
    })
}

// Function call to initialize app
init();
