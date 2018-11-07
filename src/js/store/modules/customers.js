import Vue from 'vue';
import config from '../../config';

export default {
    state: {

    },
    mutations: {

    },
    actions: {
        createCustomerByService (context, data) {
            return Vue.http.post(`${config.apiAtrix}/auvo/create-client`, data).then((response) => {
                return response;
            });
        },
    }
}