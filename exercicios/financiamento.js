const valorProduto = 1350;
const quantidadeParcelas = 12;
const jurosMensal = 0.05; // que é igual a 5%
let valorParcela = (valorProduto / quantidadeParcelas);

function calcularValorFinanciamento (quantidadeParcelas, jurosMensal, valorParcela) {
    let valorFinanciamento = valorParcela * (((1 + jurosMensal)** quantidadeParcelas - 1) / jurosMensal);
    console.log(`Valor total do financiamento: R$ ${valorFinanciamento.toFixed(2)}`);
}

calcularValorFinanciamento(quantidadeParcelas, jurosMensal, valorParcela);