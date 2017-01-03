let configs = require('./config.js')

const LINE_1 = 'dian_xin' //电信
const LINE_2 = 'yi_dong' //移动
const LINE_3 = 'bgp' //BGP
const LINE_LIST = [LINE_1, LINE_2, LINE_3]

const STATE_1 = 'yun_xing_zhong' //运行中
const STATE_2 = 'ting_zhi' //停止
const STATE_3 = 'chong_qi_zhong' //重启中
const STATE_4 = 'qi_dong_zhong' //启动中
const STATE_5 = 'ting_zhi_zhong' //停止中
const STATE_6 = 'shi_li_guo_qi' //实例过期
const STATE_LIST = [STATE_1, STATE_2, STATE_3, STATE_4, STATE_5, STATE_6]

// const REGION_0 = 'all' //全部
const REGION_1 = 'hua_dong' //华东
const REGION_2 = 'hua_nan' //华南
const REGION_LIST = [REGION_1, REGION_2]


let items = []
for (let index = 0; index < 300; index++) {
    let item = {}
    item.id = configs.getRandomNum(0, 500, 8)
    item.name = '实例名称_' + index
    item.extranetIp = '4.4.4.' + index
    item.intranetIp = '172.16.0.' + index
    item.line = configs.getRandomValue(LINE_LIST)
    item.state = configs.getRandomValue(STATE_LIST)
    item.region = configs.getRandomValue(REGION_LIST)
    item.config = [1, 1024, 4]
    item.date = configs.getRandomDateValue()
    item.describe = ''
    items.push(item)
}

module.exports = items
