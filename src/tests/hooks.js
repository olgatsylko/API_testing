const printer = require ('../config/support/logger');

exports.mochaHooks = {
    beforeEach: async function () {
        printer.print('DESCRIBE', `${this.currentTest.parent.title} test started`);
        printer.print('IT', `${this.currentTest.title} test started` );
    },
    afterEach: async function() {
        printer.print('DESCRIBE', `${this.currentTest.parent.title} test finished`);
        printer.print('IT', `${this.currentTest.title} test finished`);
    }
};