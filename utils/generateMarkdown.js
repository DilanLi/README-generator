// function to generate markdown for README
function generateMarkdown1(data) {
  const licenseAbbr = data.license.replace(" ", "%20");

  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${licenseAbbr}-blue.svg)

## Description
${data.description}  

  ## Table of Contents  
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)  

## Installation  
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}  

## License
This application is covered under the ${data.license} license.

## Questions
Please contact me for any aditional questions.  

GitHub: https://github.com/${data.github}  
Email: ${data.email}

  `;
}
 
// function to generate markdown for README if user chooses no contributing
function generateMarkdown2(data) {
  const licenseAbbr = data.license.replace(" ", "%20");

  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${licenseAbbr}-blue.svg)

## Description
${data.description}  

  ## Table of Contents  
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)  

## Installation  
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}  

## License
This application is covered under the ${data.license} license.

## Questions
Please contact me for any aditional questions.  

GitHub: https://github.com/${data.github}  
Email: ${data.email}

  `;
}

  


module.exports = {
  generateMarkdown1: generateMarkdown1,
  generateMarkdown2: generateMarkdown2
};
