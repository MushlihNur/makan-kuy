import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <div class="content">
        <input id="query" type="text">
           <h2 class="explore__label">Your Liked Restaurant</h2>
                <div id="resto" class="resto">
                
                </div>
        </div>
        `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestoItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('resto').innerHTML = html;

    document.getElementById('resto')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Restoran tidak ditemukan</div>';
  }
}

export default FavoriteRestaurantSearchView;
