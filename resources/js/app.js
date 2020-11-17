require("./bootstrap");
window.Vue = require('vue')
//window.moment.updateLocale('en', { week: { dow: 1 } })

Vue.config.productionTip = false
//Vue.prototype.$jquery = $
// import App from './App.vue'
import router from "./router";
import store from "./store/store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.use(ViewUI);

Vue.component("mainapp", require("./components/mainapp.vue").default);
const app = new Vue({
    el: "#app",
    // render: h => h(App),
    router,
    store
});
