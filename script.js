function toggleAuthForm() {
    const overlay = document.getElementById('authOverlay');
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
    showLoginForm(); // Показываем форму авторизации по умолчанию
}

// Функция для показа формы авторизации
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

// Функция для показа формы регистрации
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// Закрытие формы при клике вне её области
window.onclick = function(event) {
    const overlay = document.getElementById('authOverlay');
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
};

// Закрытие формы при нажатии на кнопку "Войти" или "Зарегистрироваться"
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    toggleAuthForm(); // Закрываем форму
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    toggleAuthForm(); // Закрываем форму
});