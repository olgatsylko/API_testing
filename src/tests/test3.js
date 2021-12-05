const api = require ('../app/api');

describe ('API: assets page-data', function(){
    it ('Test third requiest: /page-data', async function(){
        const resp = await api.assets.getPageData()
        api.expect(resp.status).to.equal(200);
        api.expect(resp.headers['content-type']).to.equal('application/json');
        api.expect(resp.headers['cf-cache-status']).to.include('HIT');
        api.expect(resp.data).to.be.jsonSchema(api.schema.assetsSchema)
    })
})