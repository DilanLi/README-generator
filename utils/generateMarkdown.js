// function to generate markdown for README
function generateMarkdown(data) {
  const licenseAbbr = data.license.replace(" ", "%20");
  if (data.contributionConfirm === false) {
    
  }

return `# ${data.title}
![License: ${data.license}](https://img.shields.io/badge/License-${licenseAbbr}-green.svg)

## Description
${data.description}  

  ## Table of Contents  
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)  

## Installation  
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${data.license} license.  

## Contributing
${data.contribution}

## Tests
${data.tests}  

## Questions
Please contact me for any aditional questions.  
GitHub: https://github.com/${data.github}  
  
Email: ${data.email}

  `;
}
 

  


module.exports = generateMarkdown;
