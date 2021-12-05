const BaseApi = require ('./baseApi');
const chai = require ('chai');
const Manifest = require('./endpoints/manifest');
const Users = require ('./endpoints/users');
chai.use(require('chai-json-schema'));
const schema = require('./schemas/schema')


class Api extends BaseApi {
    expect = chai.expect;

    manifest = new Manifest();
    users = new Users();
    schema = schema;
}

module.exports = new Api();