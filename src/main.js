import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome)

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon);

import VueOverflowScroll from 'vue-overflow-scroll'
Vue.use(VueOverflowScroll);

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app')
