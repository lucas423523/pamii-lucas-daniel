function isPrimo(n) {
    if (n <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}


console.log(isPrimo(5)); 
console.log(isPrimo(10)); 
console.log(isPrimo(13)); 
