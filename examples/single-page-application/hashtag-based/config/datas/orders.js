let configs = require('./config.js')

const TYPE_1 = {
    label: '新购',
    value: 'xin_gou'
}
const TYPE_2 = {
    label: '续费',
    value: 'xu_fei'
}
const TYPE_3 = {
    label: '升级',
    value: 'sheng_ji'
}
const TYPE_LIST = [TYPE_1, TYPE_2, TYPE_3]

const STATUS_1 = {
    label: '已支付',
    value: 'yi_zhi_fu'
}
const STATUS_2 = {
    label: '待支付',
    value: 'dai_zhi_fu'
}
const STATUS_3 = {
    label: '已关闭',
    value: 'yi_guan_bi'
}
const STATUS_LIST = [STATUS_1, STATUS_2, STATUS_3]


let items = []
for (let index = 0; index < 100; index++) {
    let item = {}
    item.id = configs.getRandomNum(0, 500, 8)
    item.pays = configs.getRandomNum(100, 999999, 0)
    item.date = configs.getRandomDateValue()
    item.type = configs.getRandomValue(TYPE_LIST)
    item.status = configs.getRandomValue(STATUS_LIST)
    items.push(item)
}

module.exports = items