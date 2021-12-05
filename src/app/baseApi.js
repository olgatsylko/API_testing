const axios = require ('axios');
const printer = require('../config/support/logger');


class BaseApi {
    constructor() {
        this.axios = axios;
        this.axios.defaults.baseURL = 'https://www.codecademy.com'
    }

    async get(url) {
        const data = {
            method: 'GET',
            url 
        }
        try {
            const resp = await this.axios(data);
            printer.print('method', `GET ${this.axios.defaults.baseURL}${url} with response code ${resp.status}`)
            return resp;
        } catch (err) {
            if (err.response) {
                printer.print('WARN', `GET ${this.axios.defaults.baseURL}${url} with response code ${err.response.status}`)
                return err.response;
            }
            printer.print('ERROR', `GET ${this.axios.defaults.baseURL}${url} with response code ${err.message}`)
            throw err;
        }  
    }
}

module.exports = BaseApi;