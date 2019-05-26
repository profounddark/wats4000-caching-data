// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.

    config.params.APPID = '0152b91eb4c200e41680a8f3b37af976';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});