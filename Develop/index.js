// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateTeam = require('./src/generateTeam.js');

const DIST_DIR = path.resolve(__dirname, './dist');
const distPath = path.join(DIST_DIR, 'team.html');

const teamMembers = [];
const idArray = [];

// TODO: Create an array of questions for user input


// TODO: Create a function to initialize app
function init() {
  console.log("Create your team!");
  function createManager() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: "Enter your manager name: ",
          name: 'managerName',
        },
        {
          type: 'input',
          message: "Enter your manager's id: ",
          name: 'managerId',
        },
        {
          type: 'input',
          message: "Enter your team manager's email: ",
          name: 'managerEmail',

        },
        {
          type: 'input',
          message: "Enter your team manager's office number: ",
          name: 'managerOfficeNumber',
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });
  }
  function createTeam() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberChoice',
          message: 'Which type of team member would you like to add?',
          choices: [
            'Engineer',
            'Intern',
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((userChoice) => {
        // switch is used to perform different actions based on different conditions 
        switch (userChoice.memberChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: "Enter your manager's name: ",
          name: 'engineerName',

        },
        {
          type: 'input',
          message: "Enter your engineer's id: ",
          name: 'engineerId',

        },
        {
          type: 'input',
          message: "Enter your engineer's email: ",
          name: 'engineerEmail',

        },
        {
          type: 'input',
          message: "Enter your engineer's GitHub username: ",
          name: 'engineerGithub',

        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: "Enter your intern's name: ",
          name: 'internName',

        },
        {
          type: 'input',
          message: "Enter your intern's id: ",
          name: 'internId',

        },
        {
          type: 'input',
          message: "Enter your intern's email: ",
          name: 'internEmail',

        },
        {
          type: 'input',
          message: "Enter your intern's school: ",
          name: 'internSchool',

        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
  }

  function buildTeam() {
    // Create the output directory if the dist path doesn't exist
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, generateTeam(teamMembers), 'utf-8');
  }
  createManager();

}

// Function call to initialize app
init();
