import inquirer from "inquirer";
import fs from "fs/promises";

let {
projectTitle,
projectDescription,
projectInstallation,
projectUsage,
projectLicense,
projectContributing, 
projectTests,
projectQuestions
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
        message: "Please list the people who supported your project or any contributing sources:",
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
])

