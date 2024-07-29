import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Cria a aplicação Vue
const app = createApp(App);

// Usa o roteador na aplicação
app.use(router);

// Monta a aplicação no elemento com id 'app'
app.mount('#app');
