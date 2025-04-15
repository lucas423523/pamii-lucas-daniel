function contarLetra(palavra, letra) {
    let contador = 0;

    
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].toLowerCase() === letra.toLowerCase()) {
            contador++; 
        }
    }
    
    return contador; 
}


console.log(contarLetra("banana", "a")); 
console.log(contarLetra("javascript", "a")); 
console.log(contarLetra("programacao", "o")); 
