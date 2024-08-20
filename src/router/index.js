import { createRouter, createWebHistory } from 'vue-router';
// import PaginaPrincipal from '../components/paginaPrincipal.vue';

const routes = [
  // {
  //   path: '/pagina-principal',
  //   name: 'PaginaPrincipal', // Atualizado
  //   component: PaginaPrincipal
  // },
  {
    path: '/outros-componentes',
    name: 'OutrosComponentes',
    component: () => import('../components/outrosComponentes.vue')
  },
  {
    path: '/imagens-diversas',
    name: 'ImagensDiversas',
    component: () => import('../components/imagensDiversas.vue')
  },
  {
    path: '/video-unico',
    name: 'VideoUnico',
    component: () => import('../components/videoUnico.vue')
  },
  {
    path: '/tabela-diversos',
    name: 'TabelaDiversos',
    component: () => import('../components/tabelaDiversos.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
