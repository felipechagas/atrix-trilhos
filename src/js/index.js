import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
import '../scss/style.scss';
import '../../node_modules/moment/locale/pt-br';
import '../../node_modules/animate.css/animate.css';
import Vue from 'vue';
import datePicker from 'vue-bootstrap-datetimepicker';
import VueResource from 'vue-resource';
import VueTheMask from 'vue-the-mask';
import router from '../js/router';
import App from '../components/App.vue';

import store from '../js/store/store';

Vue.use(VueResource);
Vue.use(VueTheMask);
Vue.use(datePicker);

var vm = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});