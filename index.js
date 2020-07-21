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
        message: "Description of the project",
        name: "description"
        }
    ])
    .then(function(response){
        console.log(response);
        // const data = markdown.generateMarkdown(response)
        // .catch(function(err){
        //     console.log(err);
        // });
        fs.writeFile("README.md", markdown(response), function(err){
            if (err){
                return console.log(err);
            }
        })
    })
}

// function call to initialize program
init();
