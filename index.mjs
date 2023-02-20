import inquirer from "inquirer";
import fs from "fs/promises";

// storing questions in a variable
let {
  projectTitle,
  projectDescription,
  projectInstallation,
  projectUsage,
  projectLicense,
  projectContributing,
  projectTests,
  githubQuestions,
  emailQuestions
} = await inquirer.prompt([
  {
    type: "input",
    message: "What is the name of your project?",
    name: "projectTitle",
    // checking that user has entered title:
    validate: (projectTitle) => {
      if (projectTitle) {
        return true;
      } else {
        console.log("Please enter your project title");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please describe your project:",
    name: "projectDescription",
  },
  {
    type: "input",
    message: "Please explain how to install for first use:",
    name: "projectInstallation",
  },
  {
    type: "input",
    message: "Please talk the user through the steps to use your project:",
    name: "projectUsage",
  },
  {
    type: "list",
    message: "Please choose a type of license:",
    name: "projectLicense",
    choices: [
      "MIT License",
      "Mozzilla Public License 2.0",
      "Open Database License (ODbl)",
      "The Unilicense",
      "Boost Software License 1.0",
      "Apache 2.0 License",
    ],
  },
  {
    type: "input",
    message:
      "Please list the people who supported your project or any contributing sources:",
    name: "projectContributing",
  },
  {
    type: "input",
    message: "Please enter instructions on how to test your project:",
    name: "projectTests",
  },
  {
    type: "input",
    message: "Please enter your GitHub URL:",
    name: "githubQuestions",
  },
  {
    type: "input",
    message: "Please enter your email address:",
    name: "emailQuestions",
  },
]);

// License badges
function printBadge(license) {
  let badgeURL;

  switch (license) {
    case "MIT License":
      badgeURL = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Mozzilla Public License 2.0":
      badgeURL = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "Open Database License (ODbl)":
      badgeURL = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
      break;
    case "The Unilicense":
      badgeURL = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    case "Boost Software License 1.0":
      badgeURL = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case "Apache 2.0 License":
      badgeURL = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    default:
      badgeURL = `[![License](https://img.shields.io/badge/License-Unknown-lightgrey.svg)](https://opensource.org/License-Unknown-lightgrey)`;
  }
  return badgeURL;
}

// creating README
let finalReadme = `# ${projectTitle}
${printBadge(projectLicense)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
* ${projectDescription}
## Installation
* Please follow these steps:
${projectInstallation}
## Usage
* ${projectUsage}
## License
* ${projectLicense}
## Contributing
* ${projectContributing}
## Tests
* Please follow these steps:
${projectTests}
## Questions
* To find out more about my projects, please visit: ${githubQuestions}
* Feel free to contact me with any questions: ${emailQuestions}
`;

await fs.writeFile("yourREADME.md", finalReadme);

// Success message
console.log("yourREADME.md has been created successfully.");
