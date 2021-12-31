import axios from 'axios'

export default async (event) => {
  const title = event.message.text.replace('!name ', '')
  try {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
    for (const showInfo of data) {
      if (title === event.message.text) {
        console.log(title)
        event.reply({
          type: 'location',
          title: '',
          address: showInfo.location,
          latitude: showInfo.latitude,
          longitude: showInfo.longitude
        })
        return
      }
    }
    event.reply('找不到')
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
