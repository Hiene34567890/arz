document.getElementById('search-btn').addEventListener('click', function() {
    let searchQuery = document.getElementById('search-input').value.toLowerCase();
    let ads = document.querySelectorAll('.ad');
    
    ads.forEach(ad => {
        let adTitle = ad.querySelector('h3').textContent.toLowerCase();
        if (adTitle.includes(searchQuery)) {
            ad.style.display = 'block';
        } else {
            ad.style.display = 'none';
        }
    });
});

document.getElementById('category-select').addEventListener('change', function() {
    let selectedCategory = this.value;
    let ads = document.querySelectorAll('.ad');

    ads.forEach(ad => {
        let adCategory = ad.dataset.category;
        if (selectedCategory === 'all' || adCategory === selectedCategory) {
            ad.style.display = 'block';
        } else {
            ad.style.display = 'none';
        }
    });
});