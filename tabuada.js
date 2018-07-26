if(process.argv.length === 3 && !isNaN(Number(process.argv[2]))){
    let base = process.argv[2];

    for(let i = 1; i <= 10; i++){
        console.log(base * i);
    }
}
else{
    console.log("Utilização:");
    console.log("node tabuada.js <numero>");
}