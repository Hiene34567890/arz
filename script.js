// Создание объявления
document.getElementById('adForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', document.getElementById('title').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('price', document.getElementById('price').value);
    formData.append('category', document.getElementById('category').value);

    const image = document.getElementById('image').files[0];
    if (image) {
        formData.append('image', image);
    }

    const token = localStorage.getItem('token'); // Получаем токен авторизации

    try {
        const response = await fetch('/ads', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        });

        const data = await response.json();
        if (response.ok) {
            alert('Объявление успешно создано');
        } else {
            alert(`Ошибка: ${data.error}`);
        }
    } catch (error) {
        alert('Ошибка при отправке данных');
    }
});

// Поиск объявлений
document.getElementById('searchForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const query = document.getElementById('searchQuery').value;

    try {
        const response = await fetch(`/ads?query=${query}`);
        const ads = await response.json();

        // Выводим результаты поиска
        let resultsHtml = '';
        ads.forEach(ad => {
            resultsHtml += `
                <div class="ad">
                    <h3>${ad.title}</h3>
                    <p>${ad.description}</p>
                    <p>Цена: ${ad.price} руб.</p>
                    <button onclick="viewAd(${ad._id})">Подробнее</button>
                </div>
            `;
        });

        document.getElementById('adsContainer').innerHTML = resultsHtml;
    } catch (error) {
        alert('Ошибка при поиске объявлений');
    }
});

// Просмотр объявления
function viewAd(adId) {
    window.location.href = `/ads/${adId}`;
}

// Чат
const socket = io();

function sendMessage() {
    const message = document.getElementById('messageInput').value;
    socket.emit('chatMessage', message);
}

socket.on('chatMessage', function (message) {
    const messages = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    messages.appendChild(newMessage);
});

// Отзывы
document.getElementById('reviewForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const reviewText = document.getElementById('reviewText').value;
    const rating = document.getElementById('rating').value;

    const token = localStorage.getItem('token');

    try {
        const response = await fetch('/reviews', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ reviewText, rating }),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Отзыв оставлен');
        } else {
            alert(`Ошибка: ${data.error}`);
        }
    } catch (error) {
        alert('Ошибка при отправке отзыва');
    }
});
