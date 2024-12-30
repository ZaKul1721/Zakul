document.addEventListener('DOMContentLoaded', function () {
    // Додаємо обробник подій для кожної категорії
    const categories = document.querySelectorAll('.category-toggle');
    
    categories.forEach(function (category) {
        category.addEventListener('click', function () {
            // Додаємо/вилучаємо клас 'open' для кожної категорії
            category.classList.toggle('open');

            // Знаходимо відповідну підкатегорію і показуємо/приховуємо її
            const subcategories = category.nextElementSibling;
            if (subcategories.style.display === "block") {
                subcategories.style.display = "none";
            } else {
                subcategories.style.display = "block";
            }
        });
    });

    // Перемикання теми
    const themeToggleButton = document.getElementById('theme-toggle');
    
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeToggleButton.textContent = 'Світла тема';
        } else {
            themeToggleButton.textContent = 'Темна тема';
        }
    });
});
