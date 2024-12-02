// При наведении на кнопку подписки изменяем её стиль
const subscribeBtns = document.querySelectorAll('.subscribe-btn');

subscribeBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
        btn.style.transition = 'transform 0.3s ease';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});


// Функция для динамического изменения цвета кнопки при наведении
const buttons = document.querySelectorAll('.subscribe-btn');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        if (button.closest('.subscription-plan').id === 'sponsor-plan') {
            button.style.backgroundColor = '#8e24aa'; // Темный оттенок для спонсора
        } else {
            button.style.backgroundColor = '#f44336'; // Темный оранжевый для других планов
        }
    });

    button.addEventListener('mouseout', () => {
        if (button.closest('.subscription-plan').id === 'sponsor-plan') {
            button.style.backgroundColor = '#9c27b0'; // Возвращаем оригинальный цвет для спонсора
        } else {
            button.style.backgroundColor = '#ff5722'; // Возвращаем оригинальный цвет для других планов
        }
    });
});


let cart = [];
let cartCount = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    updateCart();
    showNotification(`${name} добавлен в корзину!`);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.price}₽ 
        <button onclick="removeFromCart(${index})">Удалить</button>`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `${total}₽`;
}

function removeFromCart(index) {
    cartCount--;
    document.querySelector('.cart-count').textContent = cartCount;
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 2000);
}
