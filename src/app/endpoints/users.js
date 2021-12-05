const BaseApi = require ('../baseApi');

class Users extends BaseApi {

    async getWeb() {
        return this.get('/users/web');
    }
}

module.exports = Users;