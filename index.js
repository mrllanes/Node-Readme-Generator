const inquirer = require('inquirer');
const fs = require('fs');
// const selectPrompt = require('prompt');
const openFile = require('open');
const questions = require('./questions');
const makeReadme = require('./readme-template');

async function create() {
    
    try {
        const userInput = await inquirer.prompt(questions);
        if (userInput.confirm === true) {
            const readme =  await makeReadme(userInput);
            await fs.writeFileSync('./NewReadme/Readme.md', readme);
            console.log('Thank you for using the Llanes Readme Maker 3000!');
            console.log('The new Readme.md will now open in "vim" for your immediate pleasure.');
            console.log('(in vim, press the ESCAPE key and type ":q" to get out)');
            console.log('Your New Professional Readme can be found in the "NewReadme" folder.');
            await openFile('./NewReadme/Readme.md', {app:'vim'});
        } else {
            console.log('Program has been termintated. Please consider using the Llanes Readme Maker 3000 in the future!');
        }
    } catch (error) {
        console.log(error);
    };
};

create();
