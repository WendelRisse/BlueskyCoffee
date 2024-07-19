<template>
    <html>

    <body>
        <div class="tabela">
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Nome do Produto</th>
                        <th>Imagem do Produto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Kit Limpeza</td>
                        <td><img src="../assets/kitlimpeza.jpg" alt="Imagem do Kit de Limpeza"></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Produtos de Limpeza</td>
                        <td><img src="../assets/produtosdelimpeza.jpg" alt="Imagem dos Produtos de Limpeza"></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Produtos Químicos</td>
                        <td><img src="../assets/produtosquimicos.jpg" alt="Imagem do Produtos Químicos
                        "></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>

    </html>
</template>

<script>
export default { name: 'TabelaDiversos' }
</script>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: left;
}

th {
    font-weight: bold;
}

td img {
    max-width: 100px;
}
</style>