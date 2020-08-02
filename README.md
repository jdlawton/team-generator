
  # team-generator

  ![MIT](https://img.shields.io/badge/license-MIT-brightgreen)

  ## Description
  This application is designed to generate a simple team roster HTML file which will display a team manager, and all of the engineers and interns assigned to that team. Each employee will have several pieces of information displayed for them, including an employee id, an email address, and an office number, Github username, and school (if applicable). Once the HTML is created, the employees' email address can be clicked on to send an email and the engineers' Github usernames can be clicked on to visit their Github profiles.

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  Tis application runs off of Node.js, so in order to install/run it yourself, you will need to clone the Github repo to your computer. Once that is done, open a terminal window and navigate to the directory with the team-generator code. Finally, run "node index.js" to invoke the application.

  ## Usage
  The application will begin by prompting you for a information about the team's manager. Each team is assumed to have a single manager. You will be asked to enter the manager's name, ID number, email address, and office number. Once the manager information has been entered, you will be presented with the option to add an Engineer or an Intern to the team, or Finish building the team. Adding an Engineer will prompt you to enter the engineer's name, ID, email, and their Github username. Adding an intern will prompt you for the intern's name, ID, email, and their current school. You will continue to be prompted to add engineers and interns until you select the Finished option. Once finished, the application will generate a team roster page, named index.html. This file and the accompanying style.css page can be found in the /dist directory once the program is complete. Once finished, the index.html and style.css files can be moved to the webserver where you will be hosting them.

  ## License
  This software is licensed under the [MIT license](https://choosealicense.com/licenses/mit/).

  ## Contribution
  This project follows the guidelines of the [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). If you are interested in contributing, please contact me at my email in the Questions section of this README.
    

  ## Tests
  No test instructions

  ## Questions
  If you have any questions about this project, you can email me at joe.lawton@outlook.com.
  For other projects, check out my [GitHub](https://github.com/jdlawton).
