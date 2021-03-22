import Vue    from 'vue';
import Router from 'vue-router';
import routes from './routes';
import { getToken } from '@/utils/auth'

Vue.use(Router);

const router = new Router({
  routes
});

router.afterEach((to, from) => {
  document.title = to.meta.title ? to.meta.title : '管理后台';
});

router.beforeEach((to, from, next) => {
  if(to.path === '/') {
    next()
  } else {
    let token = getToken()
    token ? next() : next('/')
  }
})
export default router;
