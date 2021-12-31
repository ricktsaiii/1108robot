import 'dotenv/config'
import linebot from 'linebot'
// import name from './commands/title.js'
// import region from './commands/region.js'
// import flex from './template/flex.js'
import distance from './distance.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('監聽 - 機器人啟動')
})

bot.on('message', async (event) => {
  if (event.message.type === 'location') {
    distance(event)
  }
})
