// Скролл к секции
document.querySelectorAll('.scroll-to').forEach(button => {
    button.addEventListener('click', function () {
        const target = document.querySelector(this.dataset.target);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Фильтр трендов
document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', function () {
        const category = this.dataset.category;
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});


document.querySelectorAll('.tip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});


document.getElementById('subscribe-btn').addEventListener('click', function (e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    
    ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
    ripple.style.left = `${e.clientX - rect.left - rect.width / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - rect.height / 2}px`;
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});
