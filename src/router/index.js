import { createRouter, createWebHistory } from 'vue-router'
import CardsView from '../views/CardsView.vue'
import FormView from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cards',
      component: CardsView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    }
  ]
})

export default router
