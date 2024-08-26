function relatorioVendas(vendas, dataInicio, dataFim) {
    const totalSku = {};
    let valorVendas = 0;

    vendas.forEach(venda => {
        if (venda.data >= dataInicio && venda.data <= dataFim) {
            if (!totalSku[venda.sku]) {
                totalSku[venda.sku] = { quantidade: 0, valorTotal: 0 };
            }
            totalSku[venda.sku].quantidade += venda.quantidade;
            totalSku[venda.sku].valorTotal += venda.valorTotal;
            valorVendas += venda.valorTotal;
        }
    });
    return { totalSku, valorVendas };
}

const vendas = [
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' },
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' },
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' }
];

const periodoInicio = '2021-01-01';
const periodoFim = '2021-01-02';
const relatorio = relatorioVendas(vendas, periodoInicio, periodoFim);
console.log(relatorio);
