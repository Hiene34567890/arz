const adsData = [
  { title: "iPhone 13 Pro", price: 80000, location: "Москва", image: "https://via.placeholder.com/300x200" },
  { title: "MacBook Air", price: 100000, location: "Санкт-Петербург", image: "https://via.placeholder.com/300x200" },
  { title: "PlayStation 5", price: 50000, location: "Казань", image: "https://via.placeholder.com/300x200" },
  { title: "Apple Watch", price: 25000, location: "Новосибирск", image: "https://via.placeholder.com/300x200" },
  { title: "Электросамокат Xiaomi", price: 30000, location: "Екатеринбург", image: "https://via.placeholder.com/300x200" },
  { title: "Монитор Samsung", price: 15000, location: "Самара", image: "https://via.placeholder.com/300x200" },
  { title: "Игровой ПК", price: 120000, location: "Ростов-на-Дону", image: "https://via.placeholder.com/300x200" },
  { title: "iPad Pro", price: 85000, location: "Москва", image: "https://via.placeholder.com/300x200" },
  { title: "Велосипед", price: 20000, location: "Краснодар", image: "https://via.placeholder.com/300x200" },
  { title: "Наушники AirPods", price: 12000, location: "Санкт-Петербург", image: "https://via.placeholder.com/300x200" }
];

const adsPerPage = 6;
let currentPage = 1;
let filteredAds = adsData.slice();

function loadAds(page = 1) {
  const container = document.getElementById('ads-container');
  container.innerHTML = '';

  const start = (page - 1) * adsPerPage;
  const end = start + adsPerPage;
  const adsToShow = filteredAds.slice(start, end);

  adsToShow.forEach((ad, index) => {
    const card = document.createElement('div');
    card.className = 'ad-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <img src="${ad.image}" alt="Товар">
      <div class="ad-info">
        <h3>${ad.title}</h3>
        <p class="price">${ad.price.toLocaleString()} ₽</p>
        <p class="location">${ad.location}</p>
        <button class="btn-details">Подробнее</button>
      </div>
    `;
    container.appendChild(card);
  });

  renderPagination();
}

function renderPagination() {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  const pagesCount = Math.ceil(filteredAds.length / adsPerPage);

  for (let i = 1; i <= pagesCount; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = 'page-btn';
    pageBtn.innerText = i;
    if (i === currentPage) pageBtn.classList.add('active');
    pageBtn.addEventListener('click', () => {
      currentPage = i;
      loadAds(currentPage);
    });
    paginationContainer.appendChild(pageBtn);
  }
}

function applyFilters() {
  const locationFilter = document.getElementById('filter-location').value.toLowerCase();
  const priceMin = parseInt(document.getElementById('filter-price-min').value) || 0;
  const priceMax = parseInt(document.getElementById('filter-price-max').value) || Infinity;
  const searchQuery = document.getElementById('filter-search').value.toLowerCase();

  filteredAds = adsData.filter(ad => {
    return ad.location.toLowerCase().includes(locationFilter) &&
           ad.price >= priceMin &&
           ad.price <= priceMax &&
           ad.title.toLowerCase().includes(searchQuery);
  });

  applySorting();
  currentPage = 1;
  loadAds(currentPage);
}

function applySorting() {
  const sortType = document.getElementById('sort-select').value;

  if (sortType === "price-asc") {
    filteredAds.sort((a, b) => a.price - b.price);
  } else if (sortType === "price-desc") {
    filteredAds.sort((a, b) => b.price - a.price);
  } else if (sortType === "title-asc") {
    filteredAds.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === "title-desc") {
    filteredAds.sort((a, b) => b.title.localeCompare(a.title));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadAds();
  document.getElementById('filter-btn').addEventListener('click', applyFilters);
  document.getElementById('sort-select').addEventListener('change', () => {
    applySorting();
    loadAds(currentPage);
  });
});