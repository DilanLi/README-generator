// function to generate markdown for README
function generateMarkdown(data) {
  const licenseAbbr = data.license.replace(" ", "%20");

  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${licenseAbbr}-blue.svg)

  ## Description
  ${data.description}

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
 

  


module.exports = generateMarkdown;
