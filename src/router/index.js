import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FisrtComponent from "../components/FisrtComponent";
import Count from "../components/Count"
import Table from "../components/Table";
import MgmInvitePage from "../components/MgmInvitePage";
import ActivityInfo from "../components/ActivityInfo";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/FisrtComponent',
      name: 'FisrtComponent',
      component: FisrtComponent
    },
    {
      path: '/',
      name: 'Count',
      component:Count
    },
    {
      path: '/Table',
      name: 'Table',
      component:Table,
      children:[
        {
          path: 'MgmInvitePage',
          name: 'MgmInvitePage',
          component:MgmInvitePage
        },
        {
          path: 'ActivityInfo',
          name: 'ActivityInfo',
          component:ActivityInfo
        }
      ]
    }
  ]
})
