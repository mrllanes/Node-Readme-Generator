const inquirer = require('inquirer');
const fs = require('fs');
const openFile = require('open');
const questions = require('./questions');
const makeReadme = require('./readme-template');

async function create() {
    try {
        const userInput = await inquirer.prompt(questions);
        const readme = makeReadme(userInput);
        fs.writeFileSync('./Readme.md', md); // NOT SURE ABOUT THE "MD" HERE 
        console.log('Thank you for using the Llanes Readme Maker 3000!');
        await openFile('./Readme.md');
    } catch (error) {
        console.log(error);
    }
}

create();
