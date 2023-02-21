import { createApp } from 'vue'
import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css '
import './assets/main.css'
import PrimeVue from "primevue/config";
import Panel from "primevue/panel";
import Card from 'primevue/card';
import Rating from 'primevue/rating';
import Button from "primevue/button";
import router from './router/index.js'

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.component('Panel', Panel)
app.component('Card', Card)
app.component('Rating', Rating)
app.component('Button', Button)

app.mount('#app')
