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
        message: "What is the name of your project?"
        name: "projectTitle",
    },
    {
        type: "input",
        message: "Please describe your project:"
        name: "projectDescription",
    },
    {
        type: "input",
        message: "Please explain how to install for first use:"
        name: "projectInstallation",
    },
    {
        type: "input",
        message: "Please talk the user through the steps to use your project:"
        name: "projectUsage",
    },
    {
        type: "list",
        message: "Please choose a type of license:"
        name: "projectLicense",
    },
    {
        type: "input",
        message: "Please list the people who supported your project or any contributing sources:"
        name: "projectContributing",
    },
    {
        type: "input",
        message: "Please enter instructions on how to test your project:"
        name: "projectTests",
    },
    {
        type: "input",
        message: "Please enter your GitHub URL:"
        name: "githubQuestions",
    },
    {
    type: "input",
    message: "Please enter your email address:"
    name: "emailQuestions",
    },
])

