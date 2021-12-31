import axios from 'axios'
// import data from './data.js'
import dis from './經緯度間距離.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
    const add = []

    for (let i = 0; i <= data.length; i++) {
      if (dis(event.message.latitude, event.message.longitude, data[i].showInfo[0].latitude, data[i].showInfo[0].longitude)) {
        add.push({
          type: 'location',
          title: data[i].title,
          address: data[i].showInfo[0].location,
          latitude: data[i].showInfo[0].latitude || '24.139665',
          longitude: data[i].showInfo[0].longitude || '120.665874'
        })
        if (add.length >= 5) {
          break
        }
      }
    }

    if (add.length > 0) {
      console.log(add, '已新增的地點')
      event.reply(add)
    } else {
      // event.reply('找不到')
    }
  } catch (error) {
    console.log(error, '錯誤訊息')
    event.reply('發生錯誤')
  }
}
