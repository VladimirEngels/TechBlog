// Логика переключения тем и поиска
const themeToggle = document.getElementById('theme-toggle');
const searchForm = document.getElementById('search-form');
const searchIcon = document.getElementById('search-icon');

// Функция применения темы
function applyTheme(theme) {
    document.body.className = theme; // Применяем класс темы к body
    localStorage.setItem('theme', theme); // Сохраняем тему в LocalStorage
}

// При загрузке страницы восстанавливаем сохранённую тему
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light-theme'; // По умолчанию светлая тема
    applyTheme(savedTheme);
});

// Переключение темы
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    applyTheme(newTheme);
});

// Управление поисковой формой
searchIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Предотвращаем всплытие
    searchForm.classList.toggle('visible'); // Переключаем видимость формы
});

document.addEventListener('click', (event) => {
    if (!searchForm.contains(event.target) && event.target !== searchIcon) {
        searchForm.classList.remove('visible'); // Скрываем форму, если кликнули за её пределами
    }
});



document.addEventListener("DOMContentLoaded", function() {
    // Функция для отображения/скрытия комментариев
    function toggleCommentsSection(button) {
        const commentsSection = button.nextElementSibling; // Соседний элемент (раздел с комментариями)
        commentsSection.classList.toggle("hidden");
        button.textContent = commentsSection.classList.contains("hidden") ? "Комментарии" : "Скрыть комментарии";
    }

    // Функция для получения текущего времени в нужном формате
    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    // Функция для добавления нового комментария
    function addNewComment(button) {
        const commentsSection = button.closest(".comments-section"); // Родительский блок с комментариями
        const commentInput = commentsSection.querySelector(".comment-input"); // Поле ввода комментария
        const commentText = commentInput.value.trim(); // Очищаем текст от лишних пробелов

        if (commentText) {
            const newComment = createComment(commentText);
            const currentTime = getCurrentTime();
            newComment.querySelector(".comment-time").textContent = currentTime; // Вставляем время комментария
            commentsSection.querySelector(".comments-list").appendChild(newComment); // Добавляем новый комментарий
            commentInput.value = ""; // Очищаем поле ввода
        }
    }

    // Функция для создания комментария
    function createComment(text) {
        const comment = document.createElement("li");
        comment.classList.add("comment");
        comment.innerHTML = `
            <div class="comment-content">
                <p class="comment-text">${text}</p>
                <button class="reply-btn">Ответить</button>
                <span class="comment-time"></span> <!-- Вставка времени -->
            </div>
            <ul class="replies hidden"></ul>
        `;

        // Добавление события на кнопку "Ответить"
        const replyButton = comment.querySelector(".reply-btn");
        replyButton.addEventListener("click", function() {
            openReplyInput(comment);
        });

        return comment;
    }

    // Функция для отображения/скрытия списка ответов на комментарий
    function openReplyInput(comment) {
        const repliesList = comment.querySelector(".replies"); // Список ответов на текущий комментарий
        const replyInputContainer = comment.querySelector(".reply-input-container");

        // Если поле для ответа не существует, создаем его
        if (!replyInputContainer) {
            const newReplyInputContainer = document.createElement("div");
            newReplyInputContainer.classList.add("reply-input-container");
            newReplyInputContainer.innerHTML = `
                <textarea class="reply-input" placeholder="Напишите ответ..." rows="2"></textarea>
                <button class="reply-submit-btn">Отправить</button>
            `;
            comment.appendChild(newReplyInputContainer);

            // Обработчик для кнопки отправки ответа
            newReplyInputContainer.querySelector(".reply-submit-btn").addEventListener("click", function() {
                const replyText = newReplyInputContainer.querySelector(".reply-input").value.trim();
                if (replyText) {
                    const replyComment = createComment(replyText); // Создаем ответ
                    const currentTime = getCurrentTime();
                    replyComment.querySelector(".comment-time").textContent = currentTime; // Время ответа
                    repliesList.appendChild(replyComment); // Добавляем ответ в список
                    newReplyInputContainer.remove(); // Убираем поле для ввода после отправки ответа
                    repliesList.classList.remove("hidden"); // Показываем ответы
                }
            });
        }
    }

    // Обработчик для кнопки "Показать комментарии"
    document.querySelectorAll(".toggle-comments-btn").forEach(button => {
        button.addEventListener("click", function() {
            toggleCommentsSection(button);
        });
    });

    // Обработчик для кнопки добавления комментария
    document.querySelectorAll(".comment-btn").forEach(button => {
        button.addEventListener("click", function() {
            addNewComment(button);
        });
    });
});




// Получаем элементы навигации
const navLinks = document.querySelectorAll('.nav-link');

// Обновляем активный статус при клике
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Убираем активное состояние у всех ссылок
        navLinks.forEach(nav => nav.removeAttribute('aria-current'));
        // Устанавливаем активное состояние для выбранной ссылки
        link.setAttribute('aria-current', 'page');
    });
});


    
    document.querySelectorAll('.footer-toggle').forEach((toggleButton) => {
        toggleButton.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
    
            const content = this.nextElementSibling;
            if (!expanded) {
                content.style.maxHeight = content.scrollHeight + 'px'; // Плавное открытие
            } else {
                content.style.maxHeight = null; // Плавное закрытие
            }
        });
    });
    




    document.querySelectorAll('.article-reactions').forEach((reactionBlock) => {
        const likeBtn = reactionBlock.querySelector('.like-btn');
        const dislikeBtn = reactionBlock.querySelector('.dislike-btn');
        const likeCount = reactionBlock.querySelector('.like-count');
        const dislikeCount = reactionBlock.querySelector('.dislike-count');
      
        // Функция для безопасного преобразования текста в число
        const getCount = (countElement) => {
          return parseInt(countElement.textContent) || 0;
        }
      
        likeBtn.addEventListener('click', () => {
          let currentLikeCount = getCount(likeCount);
      
          // Увеличиваем/уменьшаем количество лайков
          if (!likeBtn.classList.contains('active')) {
            likeCount.textContent = currentLikeCount + 1;
            likeBtn.classList.add('active');
      
            // Если дизлайк был активен, отменяем его
            if (dislikeBtn.classList.contains('active')) {
              let currentDislikeCount = getCount(dislikeCount);
              dislikeCount.textContent = Math.max(0, currentDislikeCount - 1);  // Проверка, чтобы количество не стало меньше 0
              dislikeBtn.classList.remove('active');
            }
          } else {
            likeCount.textContent = Math.max(0, currentLikeCount - 1);  // Проверка, чтобы количество не стало меньше 0
            likeBtn.classList.remove('active');
          }
        });
      
        dislikeBtn.addEventListener('click', () => {
          let currentDislikeCount = getCount(dislikeCount);
      
          // Увеличиваем/уменьшаем количество дизлайков
          if (!dislikeBtn.classList.contains('active')) {
            dislikeCount.textContent = currentDislikeCount + 1;
            dislikeBtn.classList.add('active');
      
            // Если лайк был активен, отменяем его
            if (likeBtn.classList.contains('active')) {
              let currentLikeCount = getCount(likeCount);
              likeCount.textContent = Math.max(0, currentLikeCount - 1);  // Проверка, чтобы количество не стало меньше 0
              likeBtn.classList.remove('active');
            }
          } else {
            dislikeCount.textContent = Math.max(0, currentDislikeCount - 1);  // Проверка, чтобы количество не стало меньше 0
            dislikeBtn.classList.remove('active');
          }
        });
      });
      

// Получаем кнопку
let backToTopButton = document.getElementById('back-to-top');

// Когда пользователь прокручивает страницу, показываем или скрываем кнопку
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// При клике на кнопку прокручиваем страницу наверх
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
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














