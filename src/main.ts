import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/utils/axiosInterceptors' 

const app = createApp(App)
app.use(ElementPlus, {
  size: 'small'
})

app.use(store)
app.use(router)
app.mount('#app')
