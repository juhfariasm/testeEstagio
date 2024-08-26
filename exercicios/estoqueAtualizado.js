function atualizarEstoque(itensVendidos, estoque) {
    for (const itemVendido of itensVendidos) {
        const itemEstoque = estoque.find(item => item.sku === itemVendido.sku);
        if (itemEstoque) {
            itemEstoque.quantidade -= itemVendido.quantidade;
        }
    } return estoque;
}

const itensVendidos = [
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }
];

const estoque = [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
];

const estoqueAtualizado = atualizarEstoque(itensVendidos, estoque);
console.log(estoqueAtualizado);
