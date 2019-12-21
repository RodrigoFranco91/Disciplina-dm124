function bakeACake(){

}

function addFrosting(cake){

}

async function main(){
    const cake = await bakeACake();
    const cakeWithFrosting = await addFrosting(cake);
    console.log(cakeWithFrosting);
}

main();