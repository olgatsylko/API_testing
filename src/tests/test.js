const api = require ('../app/api');

describe ('API: manifest.json', function(){
    it ('Test first requiest: /manifest.json', async function(){
        const resp = await api.manifest.getManifest();
        api.expect(resp.status).to.equal(200);
        api.expect(resp.data.name).to.equal('Codecademy');
        api.expect(resp.data.orientation).to.equal('portrait');
        api.expect(resp.data.display).to.equal('standalone');
        api.expect(resp.headers['content-type']).to.equal('application/json');
        api.expect(resp.headers['server']).to.include('cloudflare');
        api.expect(resp.data).to.be.jsonSchema(api.schema.manifestSchema)
    })
})