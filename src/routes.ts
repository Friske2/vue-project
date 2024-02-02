import { createRouter,createWebHistory } from 'vue-router'
import MainLayout from './layouts/main.vue'
import { hasToken } from './utility/auth'
const routes = [
  {
    path: "/",
    redirect: '/home',
    component: MainLayout,
    children: [
      {
        path: 'home',
        component: ()=> import('./pages/Home.vue')
      },
      {
        path: 'about',
        component: ()=> import('./pages/About.vue')
      }
    ]
  },
  {
    path: '/login',
    component: ()=> import('./pages/Login.vue')
  },
  {
    path: '/401',
    component: ()=> import('./pages/401Page.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: ()=> import('./pages/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to, _, next) => {
  if (to.path !== '/login' && hasToken() === false) {
    next('/login')
  } 
  else if(to.path === '/login' && hasToken() === true){
    next('/')
  }
  else {
    next()
  }
})

export default router