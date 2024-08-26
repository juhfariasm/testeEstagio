function produtosEstoque (sku, listaProdutos){ 
    const produto = listaProdutos.find(p => p.sku === sku);
    if (produto && produto.quantidade > 0) {
        return true;
    } else {
        return false;
    }
}

const produtos = [
    { sku: 1001, nome: 'Camiseta', quantidade: 5 },
    { sku: 1002, nome: 'Calça', quantidade: 10 },
    { sku: 1003, nome: 'Vestido', quantidade: 3 }
];

console.log(produtosEstoque(1001, produtos)); 
console.log(produtosEstoque(1002, produtos));
console.log(produtosEstoque(1003, produtos)); 
console.log(produtosEstoque(1234, produtos)); 