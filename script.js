// Функция для скрытия шапки при скролле
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Скроллим вниз - скрыть шапку
        header.style.top = '-80px';
    } else {
        // Скроллим вверх - показать шапку
        header.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для предотвращения ошибок при прокрутке в верх
});

// Открытие и закрытие модального окна (для формы обратной связи)
const openFormButton = document.querySelector('#open-contact-form');
const closeFormButton = document.querySelector('#close-contact-form');
const contactForm = document.querySelector('.contact-form');

openFormButton.addEventListener('click', () => {
    contactForm.style.display = 'block'; // Показываем форму
});

closeFormButton.addEventListener('click', () => {
    contactForm.style.display = 'none'; // Скрываем форму
});