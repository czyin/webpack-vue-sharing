let configs = {}

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

const REGION_ALL = 'all' //全部区域
const REGION_1 = 'hua_dong' //华东
const REGION_2 = 'hua_nan' //华南

configs.lines = [{
    id: LINE_1,
    label: '电信'
}, {
    id: LINE_2,
    label: '移动'
}, {
    id: LINE_3,
    label: 'BGP'
}]

configs.states = [{
    id: STATE_1,
    label: '运行中'
}, {
    id: STATE_2,
    label: '停止'
}, {
    id: STATE_3,
    label: '重启中'
}, {
    id: STATE_4,
    label: '启动中'
}, {
    id: STATE_5,
    label: '停止中'
}, {
    id: STATE_6,
    label: '实例过期'
}]

configs.regions = [{
    id: REGION_ALL,
    label: '全部区域'
}, {
    id: REGION_1,
    label: '华东区域'
}, {
    id: REGION_2,
    label: '华南区域'
}]


configs.getRandomValue = (list) => list[Math.floor(Math.random() * list.length)]
configs.getRandomDateValue = () => (new Date()).getTime() + 86400000 * Math.floor((Math.random() - 0.3) * 10)
configs.getRandomNum = (min, max, fix = 0) => {
    if(fix === 0) {
        return (min + Math.round(Math.random() * (max - min)))
    } else {
        let randomNum = (min + Math.round(Math.random() * (max - min))).toString()
        let len = randomNum.length
        for (let i = 0; i < fix - len; i++) {
            randomNum = '0' + randomNum
        }
        return randomNum
    }
    
}


module.exports = configs
