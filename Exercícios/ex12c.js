/*
Equipe 2
Kelvin Maciel
Everton Moraes
Denise Capitaneo 
*/

// 1
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

let peliculas2 = [
    'toy story',
    'finding Nemo',
    'kung-fu panda',
    'wally',
    'fortnite'
]

function toUpper(array,array2) {
    for (index = 0; index < array2.length; index++) {
    array.push(array2[index]) //altero e armazeno no array[index]
    console.log(array[index])
    }
/* 
    for (index = 0; index < array.length; index++) {
        array[index] = array[index].toUpperCase() //altero e armazeno no array[index]
        console.log(array[index])
    } */
    return array
}


// 2


const resultado = toUpper(peliculas,peliculas2)