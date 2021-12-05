const api = require ('../app/api');

describe ('API: users/web', function(){
    it ('Test request', async function(){
        const resp = await api.users.getWeb();
        api.expect(resp.status).to.equal(200);
        api.expect(resp.headers['content-type']).to.include('application/json');
        api.expect(resp.headers['content-type']).to.include('charset=utf-8');
        api.expect(resp.headers['server']).to.include('cloudflare');
        api.expect(resp.data.features).to.include('business_insights');
    })
})