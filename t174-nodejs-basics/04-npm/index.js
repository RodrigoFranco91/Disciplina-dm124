const chalk = require('chalk');
const string = require('useful-string');

const names = [
    'Daniel Assis de Souza',
    'Filipe Henrique Benjamim de Arruda',
    'Gisele Ribeiro da Costa',
    'Rodrigo Franco de Lima'
];


const printAzul = name => console.log(chalk.default.blue(name));
const printAmarelo = name => console.log(chalk.default.yellow(name));

names
    .sort()
    .map(string.underscore)
    for (let index = 0; index < names.length; index++) {
        if(index %2===0){
            printAzul(names[index]);
        }else{
            printAmarelo(name);
        }
    }
    

//console.log(chalk.default.yellow('Hi'));

console.log(string.underscore('Rodrigo Franco'));