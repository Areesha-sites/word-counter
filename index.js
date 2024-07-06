#!/usr/bin/env node
// Import necessary modules
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";
// Display welcome message using figlet
console.log(chalk.cyan(figlet.textSync("Word Counter")));
// Start the spinner
const spinner = ora("Initializing...").start();
setTimeout(async () => {
    spinner.stop();
    // Prompt the user for a sentence
    const answers = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: chalk.yellow("Enter your sentence to count the words: ")
        }
    ]);
    // Split the sentence into words
    const words = answers.sentence.trim().split(" ").filter(word => word.length > 0);
    // Print the array of words to the console
    console.log(words);
    // Print the word count of the sentence to the console
    console.log(chalk.bold.cyan(`Your sentence word count is: ${chalk.bold.greenBright(words.length)}`));
}, 2000);
