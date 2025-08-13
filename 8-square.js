let size = Number(process.argv[2]);
if(isNaN(size) || size <= 0){
    console.log("Missing size");
}
else{
    for (row = 0; row < size; row++){
        let line = " "
        for (col = 0; col < size; col++) {
            line += "X"
        }
        console.log(line);
    }
}