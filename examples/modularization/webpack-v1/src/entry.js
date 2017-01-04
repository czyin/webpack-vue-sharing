const path = require('path')
const amd = require('./amd_module.js')
const commonjs = require('./commonjs_module.js')

amd.method()
commonjs.method()

setTimeout(addAsyncModule, 3000)

function addAsyncModule() {
    require.ensure([], function() {
        var async = require('./async')
        async.method()
    })
}
