import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/pages/shouye'
import weitao from '@/pages/weitao'
import faxian from '@/pages/faxian'
import gouwuche from '@/pages/gouwuche'
import shangcheng from '@/pages/shangcheng'
import yiyuan from '@/fenye/yiyuan'
import keshi from '@/fenye/keshi'
import zhuanjia from '@/fenye/zhuanjia'
import jiuzhen from '@/fenye/jiuzhen'
import yuyue from '@/fenye/yuyue'
import zhineng from '@/fenye/zhineng'
import yiliao from '@/fenye/yiliao'
import jianyan from '@/fenye/jianyan'
import paidui from '@/fenye/paidui'
import dianzi from '@/fenye/dianzi'
import geren from '@/fenye/geren'
import sls from '@/pages/sls'



Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye
    },
     {
      path: '/weitao',
      name: 'weitao',
      component: weitao
    },
     {
      path: '/faxian',
      name: 'faxian',
      component: faxian
    },
    {
      path: '/gouwuche',
      name: 'gouwuche',
      component: gouwuche
    },
    {
      path: '/shangcheng',
      name: 'shangcheng',
      component: shangcheng
    },
    {
    	path: '/fenye/yiyuan',
      name: 'yiyuan',
      component: yiyuan
    },
     {
    	path: '/fenye/keshi',
      name: 'keshi',
      component: keshi
    },
     {
    	path: '/fenye/zhuanjia',
      name: 'zhuanjia',
      component: zhuanjia
    },
     {
    	path: '/fenye/jiuzhen',
      name: 'jiuzhen',
      component: jiuzhen
    },
      {
    	path: '/fenye/yuyue',
      name: 'yuyue',
      component: yuyue
    },
      {
    	path: '/fenye/zhineng',
      name: 'zhineng',
      component: zhineng
    },
     {
    	path: '/fenye/yiliao',
      name: 'yiliao',
      component: yiliao
    },
      {
    	path: '/fenye/jianyan',
      name: 'jianyan',
      component: jianyan
    },
      {
    	path: '/fenye/paidui',
      name: 'paidui',
      component: paidui
    },
       {
    	path: '/fenye/dianzi',
      name: 'dianzi',
      component: dianzi
    },
       {
    	path: '/fenye/geren',
      name: 'geren',
      component: geren
    },
//  {
//	404报错页面
//  	path: '*',
//    name: 'sls',
//    component: sls
//  },
  ]
})
