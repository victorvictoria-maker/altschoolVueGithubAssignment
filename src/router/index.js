import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/repo/:repoName',
      name: 'eachrepo',
      props: true,
      // component: RepoLayoutView,
      children: [
        {
          path: '',
          name: 'EachRepoView ',
          component: () => import('../views/EachRepoView.vue')
        }
        // {
        //   path: 'details',
        //   name: 'RepoDetails',
        //   component: () => import('../views/RepoDetailsView.vue')
        // }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
    // {
    //   path: '/404/:resource',
    //   name: '404Resource',
    //   component: () => import('../views/NotFoundView.vue'),
    //   props: true
    // },
    // {
    //   path: '/network-error',
    //   name: 'NetworkError',
    //   component: () => import('../views/NetworkErrorView.vue')
    // }
  ]
})

export default router
