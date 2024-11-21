import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ItemForm from '../components/ItemForm.vue';
import ItemList from '../components/ItemList.vue';
import ItemDelete from '../components/ItemDelete.vue';
import SuggestionsPage from '../components/SuggestionsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/list', component: ItemList },
  { path: '/add', component: ItemForm },
  { path: '/delete', component: ItemDelete },
  { path: '/suggestions', component: SuggestionsPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
