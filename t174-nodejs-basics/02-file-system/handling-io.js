const fs = require('fs');

function printFileContent(error, data){
    if(error){
        console.log('File not found', error);
        return;
    }
    console.log(data);
}

fs.readFile('./students.txt', 'utf8', printFileContent);
console.log('Is it not done yet?');