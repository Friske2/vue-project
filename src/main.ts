import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import 'element-plus/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App)
app.use(router)
app.mount('#app')
