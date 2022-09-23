const generateMarkdown = templateData => {
  const {title, description, install, contribution, usage, licenses, email, github} = templateData; 
  

// generate license badges and license section of readme document if needed
let licenseString = "This project is covered under the following open source licenses:<br>"
let licenseNav = ""
let licenseBadge = ""

let licenseGenerator = function() {
  if(licenses.includes('APACHE')) {
      licenseString += "[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)<br>" 
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) "       
  }
  if(licenses.includes('MIT')) {
      licenseString += "[MIT](https://opensource.org/licenses/MIT)<br>"
      licenseBadge += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) "         
  }
  if(licenses.includes('MOZILLA')) {
      licenseString += "[MOZILLA 2.0](https://opensource.org/licenses/MPL-2.0)<br>"       
      licenseBadge += "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) " 
  }
  if(licenses.includes('PERL')) {
      licenseString += "[PERL 2.0](https://opensource.org/licenses/Artistic-2.0)<br>"
      licenseBadge += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0) "        
  }
  if(licenses.includes('ISC')) {
      licenseString += "[ISC   ](https://opensource.org/licenses/ISC)<br>"  
      licenseBadge += "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) "      
  }
  if(licenses.includes('IBM')) {
      licenseString += "[IBM 1.0](https://opensource.org/licenses/IPL-1.0)<br>"
      licenseBadge += "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"        
  }  
  if(licenseString) {
      licenseNav = "- [License](#license)"
  }
 
}
licenseGenerator(licenses)


 
return `
# ${title}
## Description
${description} 
${licenseBadge}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contributions)
- [Questions](#questions)
${licenseNav}
## Installation
${install}
## Usage
${usage}
## Contributions
${contribution}
## License
${licenseString}
## Questions
If you have any questions regarding this project please feel free to contact via [EMAIL](${email})
You can also find more of my projects on [GitHub](https://www.github.com/${github}) 
`
}

module.exports = generateMarkdown;
