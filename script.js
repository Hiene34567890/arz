// Сортировка товаров
document.getElementById("sort-by").addEventListener("change", function() {
  const sortValue = this.value;
  console.log("Сортировка по: ", sortValue);
  // Здесь можно добавить код для обновления списка товаров
});

// Управление объявлениями
const deleteAdButton = document.querySelector(".delete-ad");
const blockAdButton = document.querySelector(".block-ad");

deleteAdButton.addEventListener("click", function() {
  console.log("Объявление удалено.");
  // Здесь добавьте код для удаления объявления
});

blockAdButton.addEventListener("click", function() {
  console.log("Объявление заблокировано.");
  // Здесь добавьте код для блокировки объявления
});

// Пагинация
document.getElementById("prev-page").addEventListener("click", function() {
  console.log("Перешли на предыдущую страницу");
  // Здесь добавьте код для переключения на предыдущую страницу
});

document.getElementById("next-page").addEventListener("click", function() {
  console.log("Перешли на следующую страницу");
  // Здесь добавьте код для переключения на следующую страницу
});

// Форма добавления объявления
const addAdForm = document.querySelector(".add-ad-form form");

addAdForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const adTitle = document.getElementById("ad-title").value;
  const adDescription = document.getElementById("ad-description").value;
  const adPrice = document.getElementById("ad-price").value;
  const adCategory = document.getElementById("ad-category").value;
  
  console.log("Добавлено объявление:", adTitle, adDescription, adPrice, adCategory);
  // Здесь добавьте код для отправки данных на сервер или обработки объявления
});

  // Обновление цены в реальном времени
document.getElementById('price').addEventListener('input', function() {
document.getElementById('price-value').textContent = this.value;
});

// Применение фильтров
document.getElementById('filter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const category = document.getElementById('category').value;
  const price = document.getElementById('price').value;
  const condition = document.getElementById('condition').value;

  console.log(`Фильтры применены: Категория: ${category}, Цена: ${price}, Состояние: ${condition}`);
});

// Открытие и закрытие модального окна
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const detailsBtn = document.querySelectorAll('.details-btn');

detailsBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Фильтрация товаров
document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const condition = document.getElementById('condition').value;

    filterProducts(category, price, condition);
});

function filterProducts(category, price, condition) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productPrice = parseInt(product.getAttribute('data-price'));
        const productCondition = product.getAttribute('data-condition');

        if (
            (category === 'all' || productCategory === category) &&
            (price == 0 || productPrice <= price) &&
            (condition === 'all' || productCondition === condition)
        ) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
