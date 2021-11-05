import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/index/Index.vue'
import Home from '../views/index/Home.vue'
import About from '../views/index/About.vue'
import Events from '../views/index/Events.vue'
import Journalism from '../views/index/Journalism.vue'
import ExpertAdvisor from '../views/index/ExpertAdvisor.vue'
// 子路由
import AboutData from '../views/index/AboutData.vue'
import AboutDetail from '../views/index/AboutDetail.vue'
import JournalismClass from '../views/index/JournalismClass.vue'
import JournalismDetail  from '../views/index/JournalismDetail.vue'
import EventsClass from '../views/index/EventsClass.vue'
import EventsDetail from '../views/index/EventsDetail.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path:'/',
    name:'Index',
    component:Index,
    children:[
      {path:"home",component:Home},
      {path:"",redirect:"home"},    //没有输入值时 重定向到home 页面
      {path:"about",component:About,children:[
        {path:"",redirect:"aboutdata"},
        {path:"aboutdata",name:"AboutData",component:AboutData},
        {path:"aboutdetail",name:"AboutDetail",component:AboutDetail}
      ]},
      {path:"events",component:Events,children:[
        {path:"",redirect:"eventsclass"},
        {path:"eventsclass",name:"EventsClass",component:EventsClass},
        {path:"eventsdetail",name:"EventsDetail",component:EventsDetail}
      ]},
      {path:"journalism",component:Journalism,children:[
        {path:"",redirect:"journalismclass"},
        {path:"journalismclass",name:"JournalismClass",component:JournalismClass},
        {path:"journalismdetail",name:"JournalismDetail",component:JournalismDetail}
      ]},
      {path:"expertadvisor",component:ExpertAdvisor},
    ]
  },
  // {
  //   path:"/journalism",
  //   component:Journalism,
  //   children:[
  //     {path:"journalismdetail",name:"JournalismDetail",component:JournalismDetail}
  //   ]
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
