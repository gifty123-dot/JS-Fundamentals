function add(a, b){
    return Number(a) + Number(b)
}
const firstArgument = process.argv[2]
const secondArgument = process.argv[3]
console.log(add(firstArgument, secondArgument));