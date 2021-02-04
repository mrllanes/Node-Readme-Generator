const makeReadme = (data) => `

# ${data.title}

${data.license}

## Deployed site

type data.site info here

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Questions](#questions)

## Description

${data.description}

## Installation Instructions

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contributions}

## Questions

${data.email}
${data.github}

`;

module.exports = makeReadme;