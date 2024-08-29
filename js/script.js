// Liste des liens à ajouter
const links = [
    { href: '/', text: 'Home' },
    { href: '/menu', text: 'Menu' },
    { href: '/#about', text: 'About' },
    { href: '/#contact', text: 'Contact' }
];

// Fonction pour mettre à jour les liens dans le menu
function updateAnchors(links, targetElementId) {
    const ul = document.getElementById(targetElementId);
    const anchors = ul.querySelectorAll('a');

    // Mettre à jour chaque ancre avec les informations de la liste
    links.forEach((link, index) => {
        if (anchors[index]) { // Vérifie si l'ancre existe
            anchors[index].href = link.href;
            anchors[index].textContent = link.text;
        }
    });
}

// Appel de la fonction pour mettre à jour les ancres
updateAnchors(links, 'nav-links');

// Gestion du menu responsive
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

// Ajout au panier
document.querySelectorAll('.addtoCart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');

        // Récupérer les éléments actuels du panier
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Ajouter le produit au panier
        cart.push({ name: productName, price: productPrice });

        // Stocker le panier mis à jour
        localStorage.setItem('cart', JSON.stringify(cart));

        // Afficher une alerte
        alert(`${productName} a été ajouté au panier!`);
    });
});

// Affichage du panier
document.getElementById('cart').addEventListener('click', () => {
    const cartContent = document.getElementById('cart-content');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Vider le contenu actuel du panier
    cartItems.innerHTML = '';

    // Récupérer le panier du localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Calculer le total et générer le HTML pour chaque produit
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += parseFloat(item.price);
    });

    // Afficher le total
    cartTotal.textContent = total.toFixed(2);

    // Afficher le conteneur du panier
    cartContent.style.display = 'block';
});

// Fermeture du panier
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-content').style.display = 'none';
});

// Vider le panier
document.getElementById('clear-cart').addEventListener('click', () => {
    localStorage.removeItem('cart');
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('cart-total').textContent = '0.00';
});

// Validation de la commande
document.getElementById('checkout').addEventListener('click', () => {
    if (localStorage.getItem('cart')) {
        const orderId = Math.floor(Math.random() * 1000000);
        alert(`Commande validée! Numéro de commande: ${orderId}`);
        localStorage.removeItem('cart');
        document.getElementById('cart-items').innerHTML = '';
        document.getElementById('cart-total').textContent = '0.00';
    } else {
        alert("Votre panier est vide. Ajoutez des articles avant de valider la commande.");
    }
});
