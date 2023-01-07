import('../DATA.json').then(({
    default: jsonDATA,
}) => {

    const restaurants = jsonDATA.restaurants;
    let restoData = '';
    let parsed = '';
    restaurants.forEach((data) => {
        restoData += `
        <div class="card">
            <div tabindex="0" aria-label="restaurant origin" class="food-origin">
                <p >${data.city}</p>
            </div>
            <img  tabindex="0"class="food-img" src="${data.pictureId}" alt="Restaurant ${data.name} image">
            <div class="food-info">
                <p class="food-rating" aria-label="food rating" tabindex="0">Rating ${data.rating} ⭐</p>
                <h3 class="food-title" tabindex="0" aria-label="${data.name} restaurant">${data.name}</h3>
                <p class="food-desc" tabindex="0" aria-label="food description">${data.description}</p>
            </div>
        </div>
        `;
    });

    document.querySelector('#restoList').innerHTML = restoData;
});