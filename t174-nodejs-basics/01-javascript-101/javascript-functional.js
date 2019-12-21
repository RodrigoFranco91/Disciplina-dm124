const names = [
    'Ichigo Kurosaki',
    'Didi Mocó',
    'Bruce Wayne'
    ];

const print = name => console.log(name);
const inverte = name =>inversao(name);

function inversao(name){
   nomeInvertido = name.split(" ");
   console.log(nomeInvertido[1] + ' '+ nomeInvertido[0]);
}


names.forEach(inverte);