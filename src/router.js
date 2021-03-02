import Vue    from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  routes
});

router.afterEach((to, from) => {
  document.title = to.meta.title ? to.meta.title : '管理后台';
});

export default router;
