const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'For the "Description" portion of the Readme, please describe your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please explain any installation instructions (if there are none, use "N/A"):',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Explain how to use your project (usage):',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list any contributors to your project (people):',
        name: 'contributions',
    },
    {
        type: 'select',
        message: 'Please select a license for your project (Highly Suggested), if more than one, then select more than one:',
        name: 'license',
        choices: [
            {title: 'MIT'},
            {title: 'MIT'},
            {title: 'MIT'},
            {title: 'MIT'},
            {title: 'MIT'},
            {title: 'MIT'},
            {title: 'MIT'},
            {title: 'MIT'},
            {title: 'MIT'},
            {title: 'MIT'},
            {title: 'MIT'},
            {title: 'MIT'},
            {title: 'MIT'},
        ],
        hint: '- SPACEBAR to select, RETURN to submit -'
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'email',
    },
];

module.exports = questions;
