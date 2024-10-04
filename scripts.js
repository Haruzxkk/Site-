// Função de compra, redireciona ao Telegram com o produto já selecionado
function comprarProduto(produto) {
    const telegramUrl = `https://t.me/Devharuzx?text=Estou interessado no ${produto}`;
    window.open(telegramUrl, '_blank');
}

// Função para salvar a review no LocalStorage
document.getElementById("review-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const reviewText = document.getElementById("review-text").value;
    const reviewDate = new Date().toLocaleString();
    
    const review = {
        name: username,
        text: reviewText,
        date: reviewDate
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    
    displayReviews();
    document.getElementById("review-form").reset();
});

// Função para exibir as reviews salvas
function displayReviews() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.innerHTML = "";
    
    reviews.forEach((review) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `
            <h4>${review.name} <span>${review.date}</span></h4>
            <p>${review.text}</p>
        `;
        reviewsList.appendChild(reviewElement);
    });
}

document.addEventListener("DOMContentLoaded", displayReviews);