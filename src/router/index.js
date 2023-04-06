import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewEmployee from '../views/employees/EmployeeView.vue'
import NewTeam from '../views/employees/TeamsView.vue'
import Team from '../views/employees/TeamsByIdView.vue'
import LoadInventory from '../views/inventory/LoadInventory.vue'
import Inventory from '../views/inventory/InventoryView.vue'
import InventoryTeam from "../views/inventory/InventoryTeamView.vue"
import InventoryReport from "../views/reports/InventoryReport.vue"
import InventoryProduct from "../views/inventory/InventoryProduct.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new-employee',
    name: 'newEmployee',
    component: NewEmployee
  },
  {
    path: '/new-team',
    name: 'newTeam',
    component: NewTeam
  },
  {
    path: '/teams/:id',
    name: 'Team',
    component: Team
  },
  {
    path: '/load-inventory',
    name: 'LoadInventory',
    component: LoadInventory
  },
  {
    path: '/inventory-team',
    name: 'InventoryTeam',
    component: InventoryTeam
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
  {
    path: '/inventory/product/:id',
    name: 'InventoryProduct',
    component: InventoryProduct
  },
  {
    path: '/inventory-report',
    name: 'InventoryReport',
    component: InventoryReport
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
