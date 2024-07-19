<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <PaginaPrincipal/>
  <ImagensDiversas/>
  <VideoUnico/>
  <TabelaDiversos/>
  <OutrosComponentes/>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import ImagensDiversas from './components/imagensDiversas.vue';
import TabelaDiversos from './components/tabelaDiversos.vue';
import VideoUnico from './components/videoUnico.vue';
import OutrosComponentes from './components/outrosComponentes.vue';
import PaginaPrincipal from './components/paginaPrincipal.vue';

export default {
  name: 'App',
  components: {
    HelloWorld, ImagensDiversas, OutrosComponentes , PaginaPrincipal, TabelaDiversos, VideoUnico
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
