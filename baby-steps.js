
let numeros = 0
for(i = 2; i < process.argv.length; i ++ ){
    numeros += Number(process.argv[i])
}

console.log(numeros)