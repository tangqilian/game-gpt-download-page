
import Vue from 'vue';
import axios from 'axios';
// import qs from 'qs';
import { Toast } from 'vant'
window.baseURL_NFT = ''
if (window.location.href.indexOf('***********') > -1) {
    window.baseURL_NFT = ''
} else if(window.location.href.indexOf('**********') > -1) {
    window.baseURL_NFT = ''
}
const httpInstance = axios.create({
    responseType: 'json',
    timeout: 5000000,
    params: {},
    data: {},
    validateStatus(status) {
        return status >= 200 && status < 300;
    },
})

httpInstance.interceptors.request.use((config) => {
    const configs = config;
    if (config.method === 'post') {
        configs.data = {
            ...configs.data,
        }
    } else {
        configs.params = {
            ...configs.params,
        }
    }
    return configs;
},
    error => Promise.reject(error),
);

httpInstance.interceptors.response.use((response) => {
    if (response.data.code == 10004 || response.data.code == 40002) {
        Toast(response.data.msg)
    }
    if (response.status == 200) {
        return response.data
    }
}, (err) => {
    return Promise.reject(err)
})

function request(baseURL) {
    return {
        get(url, params = null, config = {}) {
            const options = {
                method: 'GET',
                url,
                params,
                ...config,
            }
            if (baseURL) options.baseURL = baseURL;
            return httpInstance(options);
        },
        post(url, data = null, config = {
            errorSelfProcessing: false,
        }) {
            const options = {
                method: 'POST',
                url,
                data,
                ...config,
            }
            if (baseURL) options.baseURL = baseURL;
            return httpInstance(options);
        },
    }
}

export const $http = request(window.baseURL_NFT)

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$http', {
            value: $http,
            writable: false,
        })
    },
}