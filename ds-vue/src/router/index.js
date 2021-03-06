import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import CalculatorForm from '@/components/CalculatorForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Calculator',
      name: 'Calculator',
      component: CalculatorForm
    }
  ]
});
