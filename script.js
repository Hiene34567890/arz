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