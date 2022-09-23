// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input


const promptUser = data => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project. (Required)',
            calidate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter the project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of the project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter a project description!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Enter installation instruction for the project.',
            validate: installInput => {
                if (installInput) {
                  return true;
                } else {
                  console.log('Please enter installation instructions!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Enter user information for the project.',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please enter usage information!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Enter contribution guidelines for the project.',
            validate: contributionInput => {
                if (contributionInput) {
                  return true;
                } else {
                  console.log('Please enter contribution information!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Enter test instructions for the project.',
            validate: testInput => {
                if (testInput) {
                  return true;
                } else {
                  console.log('Please enter test instructions!');
                  return false;
                }
              }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Select the license of your project.',
            choices: ['APACHE', 'MIT', 'PERL', 'IBM', 'ISC']
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                return true;
                } else {
                console.log('Please enter your email address!');
                return false;
                }
               }
           },
           {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                return true;
                } else {
                console.log('Please enter your GitHub username!');
                return false;
                }
               }
           } 
    ]);
};


promptUser()
.then(data => generateMarkdown(data))
.then(generateMarkdown => {
    fs.writeFile('./dist/README.md', generateMarkdown, err => {
        if (err) throw err
    })
});
