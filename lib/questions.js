const { default: inquirer } = require("inquirer");
const Manager = require("./Manager");
let role = 'Employee';

const managerQs = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Manager\'s Office Number?'
    },
];

const engineerQs = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Engineer\'s Github Username?'
    },
];

const internQs = [
    {
        type: 'input',
        name: 'name',
        message: 'What School does the Intern attend?'
    },

];

let generalQs = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the ' + role + '\'s Name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ' + role + '\'s ID Number?'
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the ${role}\'s Email Address?`
    }
];

const genQuesArr = function(emp, gen) {
    // for (i = 0; i < gen.length; i++) { // attempted to dynamically change the questions to reflect the selected employee type.
    //     let role = 'Manager';
    //     gen[i].message
    // }
    let qs = [...gen];
    
    qs.splice(1, 0, ...emp); // finally works, splices the specific emlployee question in the generalQs array.
    return qs;
}



const questions = { managerQs, engineerQs, internQs, generalQs };
module.exports = questions; 
