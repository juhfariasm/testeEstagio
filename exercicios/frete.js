function calcularFrete(peso, distancia, tabelaPrecos) {
    for (const chave in tabelaPrecos) {
        const [pesoLimite, distanciaLimite] = chave.split(',');

        const [pesoMinimo, pesoMaximo] = pesoLimite.split('-').map(Number);
        const [distanciaMinima, distanciaMaxima] = distanciaLimite.split('-').map(Number);

        if (peso >= pesoMinimo && peso <= pesoMaximo &&
            distancia >= distanciaMinima && distancia <= distanciaMaxima) {
            return tabelaPrecos[chave];  
        }
    }
}

const tabelaPrecos = {
    '0-1,0-5': 10.0,  // até 1kg e até 5km: 10 reais
    '0-1,6-10': 15.0,
    '1-5,0-5': 20.0,  
    '1-5,6-10': 25.0, 
    '5-10,0-5': 30.0, 
    '5-10,6-10': 35.0 
};

console.log(calcularFrete(1, 3, tabelaPrecos)); 
console.log(calcularFrete(0.5, 7, tabelaPrecos));  
console.log(calcularFrete(4, 8, tabelaPrecos));  
console.log(calcularFrete(6, 3, tabelaPrecos)); 
console.log(calcularFrete(10, 6, tabelaPrecos)); 

