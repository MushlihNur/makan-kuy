import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="detail-resto__name">${resto.restaurant.name}</h2>
  <img class="detail-resto__thumbnail" src="${CONFIG.BASE_IMAGE_URL}${resto.restaurant.pictureId}" alt="${resto.name}">
  <div class="detail-resto__info">
    <h3>Information</h3>
      <h4>City</h4>
        <p>${resto.restaurant.city}</p>
      <h4>Address</h4>
        <p>${resto.restaurant.address}</p>
      <h4>Description</h4>
        <p>${resto.restaurant.description}</p>
      <h4>Menu</h4>
        <h5>Foods</h5>
          <p>${resto.restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</p>
        <br>
        <h5>Drinks</h5>
          <p>${resto.restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</p>
  </div>
  <div class="detail-resto__review">
    <h3>Customer Reviews</h3>
    ${resto.restaurant.customerReviews.map((review) => `
    <div class="reviewer">
        <h4>${review.name}</h4>
        <p>${review.review}</p>
        <br>
        <p>${review.date}</p>
        </div>
    `).join('')}
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <article class="resto-item">
        <div class="resto-item__header">
            <img class="resto-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}">
            <div class="resto-item__header__rating">
                <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
            </div>
        </div>
       <div class="resto-item__content">
           <h3 class="resto-item__name"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
           <p class="resto-item__city">Lokasi: ${resto.city}</p>
           <p class="resto-item__description">${resto.description}</p>
       </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
