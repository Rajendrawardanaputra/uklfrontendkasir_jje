import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AdminHome from '../views/Admin/AdminHome.vue'
import AdminMeja from '../views/Admin/AdminMeja.vue'
import AdminMenu from '../views/Admin/AdminMenu.vue'
import AdminUser from '../views/Admin/AdminUser.vue'
// Kasir
import KasirMenu from '../views/Kasir/KasirMenu.vue'
import KasirHome from '../views/Kasir/KasirHome.vue'
import KasirTransaksi from '../views/Kasir/KasirTransaksi.vue'
import KasirOnGoing from '../views/Kasir/KasirOnGoing.vue'
import KasirPrintStruk from '../views/Kasir/KasirPrintStruk.vue'
import KasirHistory from '../views/Kasir/KasirHistory.vue'
//manager
import AllTransaksi from '../views/Manager/AllTransaksi.vue'
import ManagerHome from '../views/Manager/ManagerHome.vue'
import FilterTransaksi from '../views/Manager/FilterTransaksi.vue'
import ProfitPage from '../views/Manager/ProfitPage.vue'
//Login
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/adminhome',
    name: 'adminhome',
    component: AdminHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/adminmeja',
    name: 'adminmeja',
    component: AdminMeja,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/adminmenu',
    name: 'adminmenu',
    component: AdminMenu,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/adminuser',
    name: 'adminuser',
    component: AdminUser,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  //kasir
  {
    path: '/kasirmenu',
    name: 'kasirmenu',
    component: KasirMenu,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/kasirhome',
    name: 'kasirhome',
    component: KasirHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/kasirtransaksi',
    name: 'kasirtransaksi',
    component: KasirTransaksi,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/kasirongoing',
    name: 'kasirongoing',
    component: KasirOnGoing,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/kasirprintstruk/:id',
    name: 'kasirprintstruk',
    component: KasirPrintStruk
  },
  {
    path: '/kasirhistory',
    name: 'kasirhistory',
    component: KasirHistory,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  //manager
  {
    path: '/alltransaksi',
    name: 'alltransaksi',
    component: AllTransaksi,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manajer']
    }
  },
  {
    path: '/managerhome',
    name: 'managerhome',
    component: ManagerHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manajer']
    }
    
  },
  {
    path: '/filtertransaksi',
    name: 'filtertransaksi',
    component: FilterTransaksi,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manajer']
    }
  },
  {
    path: '/profit',
    name: 'profit',
    component: ProfitPage,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manajer']
    }
  },
  //Login
  {
    path: '/loginpage',
    name: 'loginpage',
    component: LoginPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    const userRole = localStorage.getItem("role")
    if (!userRole) {
      next({
        path: '/'
      })
    } else {
      if (to.meta.allowedRoles.includes(userRole)) {
        next()
      } else {
        next({
          path: '/forbidden'
        })
      }
    }
  } else {
    next();
  }
})
