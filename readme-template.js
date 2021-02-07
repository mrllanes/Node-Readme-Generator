// Template for the Node Readme Maker to be used with the index.js file
const makeReadme = (data) => `
${data.license}

# ${data.title}

## Deployed site

${data.site}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Technology](#technology)
* [Contributions](#contributions)
* [Questions](#questions)

## Description

${data.description}

## Installation Instructions

${data.installation}

## Usage

${data.usage}

## Technology Stack

The following technologies were used to create this site/application/software/project:
${data.tech}

## Contributions

The following individuals contributed to the creation of this site/application/software/project:
${data.contributions}

## Questions

If you have questions or comments about this project, please feel free to contact me via e-mail:
${data.email}

You can also find more of my projects on my GitHub page:
https://github.com/${data.github}

`;

module.exports = makeReadme;
