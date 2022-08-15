
const managerQs = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Manager\'s Office Number?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the Manager\'s Name?'
    }
];

const engineerQs = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Engineer\'s Github Username?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the Engineer\'s Name?'
    }
];

const internQs = [
    {
        type: 'input',
        name: 'name',
        message: 'What School does the Intern attend?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the Intern\'s Name?'
    }
];

const generalQs = [
    {
        type: 'input',
        name: 'id',
        message: 'What is the ' + role + '\'s ID Number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the ' + role + '\'s Email Address?',
    }
];

const questions = {managerQs, engineerQs, internQs, generalQs};
module.exports = questions; 