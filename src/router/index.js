import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PostsView from '@/views/PostsView.vue';
import PostIdPage from '@/views/PostIdPage';
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { path: '/auth', name: 'auth',
    component: () => import('../views/AuthView.vue')
  },
  { path: '/posts', component: PostsView },
  { path: '/posts/:id', component: PostIdPage },
  // { path: '/store', component: PostPageWithStore },
  // { path: '/composition', component: PostPageCompositionApi },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
