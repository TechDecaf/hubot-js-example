// Generated by CoffeeScript 1.10.0
var chai, expect, sinon;

chai = require('chai');
sinon = require('sinon');
chai.use(require('sinon-chai'));
expect = chai.expect;

describe('temp', function () {
    beforeEach(function () {
        this.robot = {
            respond: sinon.spy(),
            hear: sinon.spy()
        };
        return require('../src/j5-example')(this.robot);
    });
    it('registers a respond listener', function () {
        return expect(this.robot.respond).to.have.been.calledWith(/hello/);
    });
    return it('registers a hear listener', function () {
        return expect(this.robot.hear).to.have.been.calledWith(/orly/);
    });
});