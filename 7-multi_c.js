const num = Number(process.argv[2]);
for( i = 0; i < num; i++){
    if(isNaN(num)){
    console.log("Missing number of occurrences");
    }
    else{
        console.log("C is fun")
    }
}