const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please type in the weblink of your deployed site (include https://):',
        name: 'site',
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
        hint: '- If more than one, separate with commas -',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Please list the technologies used to create this project (i.e. JavaScipt, Node, React, etc.)',
        name: 'tech',
        hint: '- If more than one, separate with commas -',
    },
    {
        type: 'list',
        message: 'Please select a license for your project (Highly Suggested):',
        name: 'license',
        choices: [
            {name: 'Apache License 2.0', value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
            {name: 'GNU General Public License v3.0', value: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'},
            {name: 'MIT License', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
            {name: 'BSD 2-Clause "Simplified" License', value: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'},
            {name: 'BSD 3-Clause "New" or "Revised" License', value:'[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
            {name: 'Boost Software License 1.0', value: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'},
            {name: 'Creative Commons Zero v1.0 Universal', value: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'},
            {name: 'Eclipse Public License v3.0', value: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'},
            {name: 'GNU Affero General Public License v3.0', value: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)'},
            {name: 'GNU General Public License v2.0', value: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)'},
            {name: 'Mozilla Public License 2.0', value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'},
            {name: 'The Unlicense', value: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'},
            {name: 'WTFPL (the Do What the Fuck You Want to Public License)', value: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'},
            {name: 'Zlib', value: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'},
        ],
        hint: '- ARROW up and down, RETURN to submit -',
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
    {
        type: 'confirm',
        message: 'Your Professional README.MD file is being created with the information you supplied. You can open up the file and continue with modifications/additions to the document (such as adding screenshots, etc.). Would you like to continue with the information you provided?',
        name: 'value',
        initial: true
    },
];

module.exports = questions;
