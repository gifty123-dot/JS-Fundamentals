 const argument1 = process.argv[2];
const convertedarg = Number(argument1);
if(isNaN(convertedarg)){
    console.log("Not a number");
}
else{
    console.log(`My number: ${convertedarg}`);
}