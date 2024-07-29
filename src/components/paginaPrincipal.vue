<!-- src/views/Home.vue -->

<template>
  <div>
    <OutrosComponentes/>
    <router-link to="/outros-componentes">Saiba Mais</router-link>
    <br>
    <ImagensDiversas/>
    <router-link to="/imagens-diversas">Saiba Mais</router-link>
    <br>
    <VideoUnico/>
    <router-link to="/video-unico">Saiba Mais</router-link>
    <br>
    <TabelaDiversos/>
    <router-link to="/tabela-diversos">Saiba Mais</router-link>
  </div>
</template>

<script>
export default {
  name: 'PaginaPrincipal',
  components: {
    OutrosComponentes: () => import('@/components/outrosComponentes.vue'),
    ImagensDiversas: () => import('@/components/imagensDiversas.vue'),
    VideoUnico: () => import('@/components/videoUnico.vue'),
    TabelaDiversos: () => import('@/components/tabelaDiversos.vue')
  }
}
</script>

<style>
/* Estilos específicos para Home.vue */
</style>
