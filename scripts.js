// Função para redirecionar ao Telegram ao clicar em comprar
function comprarProduto(produto) {
    const mensagem = encodeURIComponent(`Olá, tenho interesse em comprar o ${produto}.`);
    const telegramURL = `https://t.me/Devharuzx?text=${mensagem}`;
    window.open(telegramURL, '_blank');
}

// Submissão do formulário de suporte
document.getElementById('support-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const mailtoLink = `mailto:seuemail@dominio.com?subject=Suporte%20ao%20Cliente&body=Nome:%20${encodeURIComponent(nome)}%0DE-mail:%20${encodeURIComponent(email)}%0DMensagem:%20${encodeURIComponent(mensagem)}`;
    window.location.href = mailtoLink;
});

// Submissão do formulário de reviews
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('review-nome').value;
    const mensagem = document.getElementById('review-mensagem').value;
    const data = new Date();
    const dataFormatada = data.toLocaleDateString('pt-BR');
    const horaFormatada = data.toLocaleTimeString('pt-BR');
    
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    
    const reviewAuthor = document.createElement('p');
    reviewAuthor.classList.add('review-author');
    reviewAuthor.textContent = nome;
    
    const reviewDate = document.createElement('p');
    reviewDate.classList.add('review-date');
    reviewDate.textContent = `Data: ${dataFormatada} - Hora: ${horaFormatada}`;
    
    const reviewMessage = document.createElement('p');
    reviewMessage.textContent = mensagem;
    
    reviewItem.appendChild(reviewAuthor);
    reviewItem.appendChild(reviewDate);
    reviewItem.appendChild(reviewMessage);
    
    document.getElementById('reviews-list').appendChild(reviewItem);
    
    // Limpar o formulário
    document.getElementById('review-form').reset();
});