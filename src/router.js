import Vue from "vue";
import VueRouter from 'vue-router'

import Items from './components/Items.vue'
import Details from './components/Details.vue'
import Base from './components/Base.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter)


  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
      {
        path: "/",
        name: "",
        component: Base
      },
      {
        path: "/people",
        name: "people",
        component: Items
      },
      {
          path: "/details/:page/:id",
          name: "details",
          component: Details
        },
        {
          path: "/starships",
          name: "starships",
          component: Items
        },
        
        {
          path: "/planets",
          name: "planets",
          component: Items
        },
        
        {
          path :"*",
          component: NotFound,
        },
        {
          path :"/404",
          component: NotFound,
        }
    ]
  });
  
  export default router;