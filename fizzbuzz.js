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



let r = fizzbuzz(0);
console.log(r);

module.exports = fizzbuzz