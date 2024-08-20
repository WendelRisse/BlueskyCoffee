<template>
  <div class="container">
    <div class="card" v-for="(component, index) in components" :key="index">
      <component :is="component.component" />
      <router-link :to="component.path" class="link">
        Saiba Mais
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginaPrincipal',
  data() {
    return {
      components: [
        {
          component: () => import('@/components/outrosComponentes.vue'),
          path: '/outros-componentes'
        },
        {
          component: () => import('@/components/imagensDiversas.vue'),
          path: '/imagens-diversas'
        },
        {
          component: () => import('@/components/videoUnico.vue'),
          path: '/video-unico'
        },
        {
          component: () => import('@/components/tabelaDiversos.vue'),
          path: '/tabela-diversos'
        }
      ]
    };
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: 80%; /* Ajuste conforme necessário */
  max-width: 600px; /* Ajuste conforme necessário */
  text-align: center;
}

.link {
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
