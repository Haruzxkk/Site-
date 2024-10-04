// Abrir modal de compra
function openModal(product) {
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'flex';
    document.getElementById('selectedProduct').innerText = product;
}

// Fechar modal de compra
function closeModal() {
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'none';
}

// Adicionar reviews
function submitReview() {
    const reviewText = document.getElementById('reviewText').value;
    const reviewSection = document.getElementById('reviewsList');
    const newReview = document.createElement('div');
    newReview.className = 'review-item';
    newReview.innerText = reviewText;
    reviewSection.appendChild(newReview);
    document.getElementById('reviewText').value = '';
}