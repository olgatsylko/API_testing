const BaseApi = require ('../baseApi');

class Assets extends BaseApi {
    async getPageData() {
        return this.get('/gatsby-assets/page-data/sq/d/63159454.json');
    }

}

module.exports = Assets;