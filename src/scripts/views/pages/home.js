import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <h2 class="explore__label">Explore Restaurant</h2>

        <div id="resto" class="resto"></div>
        `;
  },

  async afterRender() {
    const listResto = await RestoDbSource.listResto();

    const restoContainer = document.querySelector('#resto');
    listResto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
