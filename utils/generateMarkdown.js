// function to generate markdown for README
function generateMarkdown(data) {
  return "# " + data.title + "\n" +
  "## " + data.description
  

}

module.exports = generateMarkdown;
