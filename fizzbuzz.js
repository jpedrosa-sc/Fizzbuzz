
// Retorna fizzbuzz si el numero el multiplo de 3 y 5
// Retorna fizz si el numero el multiplo de 3
// Retorna buzz si el numero el multiplo de 5
// En cualquier otro caso retorna n
function fizzbuzz(n){
    // pero si el numero es multiplo de 3, retorna fizz
    if(n===0){
        return n;
    }
    
    if(n%15===0){
        return 'fizzbuzz';
    } 

    if(n%3===0){
        return 'fizz';
    }
    
    if(n%5===0){
        return 'buzz';
    }

    return n;

}
// ejecuta fizzbuzz para cada número entre 0 y N
function main(n){
    for(let i=0; i<=n; i++){
        console.log(fizzbuzz(i));
        
    }
}

main(500);

module.exports = fizzbuzz