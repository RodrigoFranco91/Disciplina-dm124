let  total = 0;
for (let index = 2; index < process.argv.length; index++) {
    total +=  Number(process.argv[index]);
}

console.log('O somatorio é: ' + total);
