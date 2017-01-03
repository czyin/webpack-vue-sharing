var fs = require('fs')
var path = require('path')

let result = {}

result.userInfo = require('./datas/userInfo.js')
result.configs = require('./datas/config.js')

result.instances = require('./datas/instances.js')
result.orders = require('./datas/orders.js')

result.log = require('./datas/log.js')
result.disk = require('./datas/disk.js')

fs.writeFileSync(path.resolve(__dirname, '../db.json'), JSON.stringify(result))
