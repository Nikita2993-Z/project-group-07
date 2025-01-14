// Оптимизация и управление меню

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuLinks = document.querySelectorAll('.menu ul li a');

    // Закрытие меню при клике на ссылку
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle.checked) {
                menuToggle.checked = false;
            }
        });
    });

    // Закрытие меню при нажатии на кнопку закрытия
    closeBtn.addEventListener('click', () => {
        menuToggle.checked = false;
    });

    // Закрытие меню при клике вне меню
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !event.target.matches('.menu-icon')) {
            menuToggle.checked = false;
        }
    });

    // Ускорение переходов при быстрой прокрутке
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll && menuToggle.checked) {
            menuToggle.checked = false;
        }
        lastScroll = currentScroll;
    });
});
