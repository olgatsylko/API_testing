const BaseApi = require ('../baseApi');

class Manifest extends BaseApi {
    async getManifest() {
        return this.get('/manifest.json');
    }

}

module.exports = Manifest;