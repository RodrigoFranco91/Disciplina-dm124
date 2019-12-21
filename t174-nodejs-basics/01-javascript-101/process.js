const names = process.argv.slice(2);

function regularPrinter(name){
    console.log(name);
}

function fancyPrinter(name){
    console.log(`-----> ${name}<-----`);
}

const print = regularPrinter;
names.forEach(print);