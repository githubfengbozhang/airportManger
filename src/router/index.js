/*
 * @Author: fengbozhang
 * @Date: 2019-10-23 13:44:17
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-05 11:40:41
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    alwaysShow: true,
    meta: { title: '概述', icon: 'dashboard' },
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '综合概述', icon: 'dashboard' }
    }]
  },

  {
    path: '/userManger/user/index',
    component: Layout,
    redirect: '/userManger/user/index',
    name: 'User',
    alwaysShow: true,
    meta: { title: '管理', icon: 'example' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/userManger/user/indexuser'),
        meta: { title: '用户管理', icon: 'table' }
      },
      {
        path: 'userinfo',
        name: 'Userinfo',
        hidden: true,
        component: () => import('@/views/userManger/user/userInfo'),
        meta: { title: '用户信息', icon: 'table' }
      },
      {
        path: 'orderManger',
        name: 'OrderManger',
        component: () => import('@/views/userManger/orderManger/index'),
        meta: { title: '订单管理', icon: 'table' }
      },
      {
        path: 'orderInfo',
        name: 'OrderInfo',
        hidden: true,
        component: () => import('@/views/userManger/orderManger/orderInfo'),
        meta: { title: '订单信息', icon: 'table' }
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import('@/views/userManger/message/index'),
        meta: { title: '消息中心', icon: 'table' }
      },
      {
        path: 'addMessage',
        name: 'AddMessage',
        component: () => import('@/views/userManger/message/addMessage'),
        meta: { title: '新建消息', icon: 'table' }
      },
      {
        path: 'flowPacket',
        name: 'FlowPacket',
        component: () => import('@/views/userManger/flowPacket/index'),
        meta: { title: '流量包管理', icon: 'table' }
      },
      {
        path: 'flowEditor',
        name: 'FlowEditor',
        component: () => import('@/views/userManger/flowPacket/flowEditor'),
        meta: { title: '流量包编辑', icon: 'table' }
      },
      {
        path: 'addFlowPacket',
        name: 'AddFlowPacket',
        component: () => import('@/views/userManger/flowPacket/addFlowPacket'),
        meta: { title: '新增流量包', icon: 'table' }
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('@/views/userManger/coupon/index'),
        meta: { title: '礼券管理', icon: 'table' }
      }
    ]
  },
  {
    path: '/settingManger',
    component: Layout,
    redirect: '/settingManger/nodeSetting/index',
    name: 'SettingManger',
    alwaysShow: true,
    meta: {
      title: '设置',
      icon: 'nested'
    },
    children: [
      {
        path: 'nodeSetting',
        name: 'NodeSetting',
        component: () => import('@/views/settingManger/nodeSetting/index'),
        meta: { title: '节点设置', icon: 'table' }
      },
      {
        path: 'invitation',
        name: 'Invitation',
        component: () => import('@/views/settingManger/invitation/index'),
        meta: { title: '邀请规则', icon: 'table' }
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/views/settingManger/account/index'),
        meta: { title: '账号管理', icon: 'table' }
      },
      {
        path: 'log',
        name: 'Log',
        component: () => import('@/views/settingManger/log/index'),
        meta: { title: '操作日志', icon: 'table' }
      },
      {
        path: 'more',
        name: 'More',
        component: () => import('@/views/settingManger/more/index'),
        meta: { title: '更多设置', icon: 'table' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/notice/index',
    name: 'System',
    alwaysShow: true,
    meta: {
      title: '系统',
      icon: 'nested'
    },
    children: [
      {
        path: 'notice',
        name: 'Notice',
        component: () => import('@/views/system/notice/index'),
        meta: { title: '通告管理' }
      },
      {
        path: 'configuration',
        name: 'Configuration',
        component: () => import('@/views/system/configuration/index'),
        meta: { title: '功能配置' }
      },
      {
        path: 'personnelManger',
        name: 'PersonnelManger',
        component: () => import('@/views/system/personnelManger/index'),
        meta: { title: '人员管理' }
      },
      // {
      //   path: 'menu2',
      //   component: () => import('@/views/nested/menu2/index'),
      //   meta: { title: '需权限组' }
      // },
      {
        path: 'operationLog',
        name: 'OperationLog',
        component: () => import('@/views/system/operationLog/index'),
        meta: { title: '操作日志' }
      }
    ]
  },
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
