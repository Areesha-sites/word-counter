#! /usr/bin/env node
// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";
// Declare a constant 'answer' and assign it to the result of inquirer.prompt function 
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.yellow("Enter your sentence to count the word: ")
    }
]);
const words = answers.sentence.trim().split(" ");
// print the array of words to the console.
console.log(words);
// print the word count of the sentence to the console
console.log(chalk.bold.cyan(`Your sentence word count is: ${chalk.bold.greenBright(words.length)}`));
