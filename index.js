const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");


// function to write README file
// function writeToFile(fileName, data) {

// }


// function to initialize program
function init() {
    inquirer
    .prompt([
        {
        type: "input",
        message: "Title of project",
        name: "title"
        },
        {
        type: "input",
        message: "Please enter a description of the project",
        name: "description"
        },
        {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
        },
        {
        type: "input",
        message: "Please provide instructions on using the application",
        name: "usage"
        },
        {
        type: "confirm",
        message: "Would you like other developers to contribute it?",
        name: "contributionConfirm"
        },
        {
        type: "input",
        message: "Please add contribution guidelines",
        name: "contribution",
        when: (answer) => answer.contributionConfirm === true
        },
        {
        type: "input",
        message: "Please provide examples on how to run tests for the application",
        name: "tests"
        },
        {
        type: "list",
        message: "Which kind of license would you like for this application?",
        name: "license",
        choices: ["AGPLv3", "GPLv3", "LGPLv3", "MPL 2.0", "Apache 2.0", "MIT", "Boost 1.0", "PDDL"]
        },
        {
        type: "input",
        message: "What is your GitHub user name?",
        name: "github"
        },
        {
        type: "input",
        message: "What is your email address?",
        name: "email"
        }
    ])
    .then(function(response){
        console.log(response);
       if (response.contributionConfirm === true){
        fs.writeFile("README.md", markdown.generateMarkdown1(response), function(err){
            if (err){
                return console.log(err);
            }
        })
       } else {
        fs.writeFile("README.md", markdown.generateMarkdown2(response), function(err){
            if (err){
                return console.log(err);
            }
        })
       }
    })
}

// function call to initialize program
init();
