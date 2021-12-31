import axios from 'axios'

export default async (event) => {
  const region = event.message.text.replace('!name ', '')
  try {
    const results = []
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
    for (const info of data.XML_Head.Infos.Info) {
      if (info.Region === region) {
        results.push(info.Name)
        if (results.length >= 5) {
          break
        }
      }
    }
    console.log(results)
    if (results.length > 0) {
      event.reply(results)
    } else {
      event.reply('找不到')
    }
  } catch (error) {
    event.reply('錯誤')
  }
}
