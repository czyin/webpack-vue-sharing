let configs = require('./config.js')

const LOG_1 = '启动了实例SH-A24'
const LOG_2 = '重启了实例SH-A24'
const LOG_3 = '停止了实例SH-A24'
const LOG_LIST = [LOG_1, LOG_2, LOG_3]

let items = []
for (let index = 0; index < 200; index++) {
    let item = {}
    item.id = configs.getRandomNum(0, 500, 8)
    item.date = configs.getRandomDateValue()
    item.ip = [configs.getRandomNum(1, 255, 3), configs.getRandomNum(0, 255, 3), configs.getRandomNum(0, 255, 3), configs.getRandomNum(0, 255, 3)].join('.')
    item.log = configs.getRandomValue(LOG_LIST)
    items.push(item)
}

module.exports = items