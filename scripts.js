// Função de compra, redireciona ao Telegram com o produto já selecionado
function comprarProduto(produto) {
    const telegramUrl = `https://t.me/seuUsuarioNoTelegram?text=Estou interessado no ${produto}`;
    window.open(telegramUrl, '_blank');
}