const BaseApi = require ('./baseApi');
const chai = require ('chai');
const Manifest = require('./endpoints/manifest');
const Users = require ('./endpoints/users');
const Assets = require ('./endpoints/assets');
chai.use(require('chai-json-schema'));
const schema = require('./schemas/schema')


class Api extends BaseApi {
    expect = chai.expect;

    manifest = new Manifest();
    users = new Users();
    assets = new Assets();
    schema = schema;
}

module.exports = new Api();