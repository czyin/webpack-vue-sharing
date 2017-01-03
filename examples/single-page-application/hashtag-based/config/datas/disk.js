let configs = require('./config.js')


const DISK_PROPERTY_1 = '系统盘'
const DISK_PROPERTY_2 = '普通盘'
const DISK_PROPERTY_LIST = [DISK_PROPERTY_1, DISK_PROPERTY_2]

const DISK_TYPE_1 = 'SSD云盘'
const DISK_TYPE_2 = '普通云盘'
const DISK_LIST = [DISK_TYPE_1, DISK_TYPE_2]

const DISK_STATUS_1 = '使用中'
const DISK_STATUS_2 = '创建中'
const DISK_STATUS_3 = '回滚中'
const DISK_STATUS_4 = '已完成'
const DISK_STATUS_LIST = [DISK_STATUS_1, DISK_STATUS_2, DISK_STATUS_3, DISK_STATUS_4]

let items = []
for (let index = 0; index < 200; index++) {
    let item = {}
    item.id = configs.getRandomNum(0, 500, 8)
    item.name = '磁盘名称' + index
    item.instanceName = '实例名称' + (index % 10)
    item.type = configs.getRandomValue(DISK_LIST)
    item.status = configs.getRandomValue(DISK_STATUS_LIST)
    item.property = configs.getRandomValue(DISK_PROPERTY_LIST)
    item.description = '磁盘描述' + index
    items.push(item)
}

module.exports = items
