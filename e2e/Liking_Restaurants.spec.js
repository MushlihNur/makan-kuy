const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Restoran tidak ditemukan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restoran tidak ditemukan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto-item__name a');
  const firstRestaurant = locate('.resto-item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestaurantName = await I.grabTextFrom('.resto-item__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('remove liked restaurant', ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.resto-item__name a');
  I.click(locate('.resto-item__name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  I.seeElement('.resto-item__name a');
  I.click(locate('.resto-item__name a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Restoran tidak ditemukan', '.restaurant-item__not__found');
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Restoran tidak ditemukan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto-item__name a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.resto-item__name a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.detail-resto__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.resto-item__name');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.resto-item__name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});
