function bakeACake(){
    console.log('Comece a cozinhar o bolo');
    return new Promise((resolve, reject)=>{
            setTimeout(() => resolve('Bolo feito'), 1000);
    });
}

function addFrosting(cake){
    return new Promise((resolve, reject)=>{
        resolve((cake + 'with a delicious frost'));
    });
}

bakeACake()
    .then(addFrosting)
    .then(data => console.log(data))
    .catch(error => console.log(error));
