import axios from 'axios'
import template from '../template/flex.js'

export default async (event) => {
  const flex = Json.parse(JSON.stringify(template))

  try {
    const { data } = await axios.get(
      'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6'
    )
    const myLatitude = event.messagr.latitude
    const myLongitude = event.messagr.longitude
    const distanceResults = []

    for (let i = 0; i < data.length; i++) {
      if (distanceResults.lengh < 5) {
        distanceResults.push({
          title: data[i].title,
          address: data[i].showInfo[0].location
        })
      }
    }

    console.log(distanceResults)

    if (distanceResults.lengh !== 0) {
      for (let i = 0; i < distanceResults.lengh; i++) {
        flex.contents.contents.push({
          type: 'flex',
          altText: '',
          contents: {
            type: 'carousel',
            contents: [
              {
                type: 'bubble',
                size: 'micro',
                hero: {
                  type: 'image',
                  url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg',
                  size: 'full',
                  aspectMode: 'cover',
                  aspectRatio: '320:213'
                },
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'text',
                      text: 'Brown Cafe',
                      weight: 'bold',
                      size: 'sm',
                      wrap: true
                    },
                    {
                      type: 'box',
                      layout: 'baseline',
                      contents: [
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png'
                        },
                        {
                          type: 'text',
                          text: '4.0',
                          size: 'xs',
                          color: '#8c8c8c',
                          margin: 'md',
                          flex: 0
                        }
                      ]
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'box',
                          layout: 'baseline',
                          spacing: 'sm',
                          contents: [
                            {
                              type: 'text',
                              text: '東京旅行',
                              wrap: true,
                              color: '#8c8c8c',
                              size: 'xs',
                              flex: 5
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  spacing: 'sm',
                  paddingAll: '13px'
                }
              },
              {
                type: 'bubble',
                size: 'micro',
                hero: {
                  type: 'image',
                  url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip11.jpg',
                  size: 'full',
                  aspectMode: 'cover',
                  aspectRatio: '320:213'
                },
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'text',
                      text: "Brow&Cony's Restaurant",
                      weight: 'bold',
                      size: 'sm',
                      wrap: true
                    },
                    {
                      type: 'box',
                      layout: 'baseline',
                      contents: [
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png'
                        },
                        {
                          type: 'text',
                          text: '4.0',
                          size: 'sm',
                          color: '#8c8c8c',
                          margin: 'md',
                          flex: 0
                        }
                      ]
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'box',
                          layout: 'baseline',
                          spacing: 'sm',
                          contents: [
                            {
                              type: 'text',
                              text: '東京旅行',
                              wrap: true,
                              color: '#8c8c8c',
                              size: 'xs',
                              flex: 5
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  spacing: 'sm',
                  paddingAll: '13px'
                }
              },
              {
                type: 'bubble',
                size: 'micro',
                hero: {
                  type: 'image',
                  url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip12.jpg',
                  size: 'full',
                  aspectMode: 'cover',
                  aspectRatio: '320:213'
                },
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'text',
                      text: 'Tata',
                      weight: 'bold',
                      size: 'sm'
                    },
                    {
                      type: 'box',
                      layout: 'baseline',
                      contents: [
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'xs',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png'
                        },
                        {
                          type: 'text',
                          text: '4.0',
                          size: 'sm',
                          color: '#8c8c8c',
                          margin: 'md',
                          flex: 0
                        }
                      ]
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'box',
                          layout: 'baseline',
                          spacing: 'sm',
                          contents: [
                            {
                              type: 'text',
                              text: '東京旅行',
                              wrap: true,
                              color: '#8c8c8c',
                              size: 'xs',
                              flex: 5
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  spacing: 'sm',
                  paddingAll: '13px'
                }
              }
            ]
          }
        })
      }
      event.reply(flex)
    }
  } catch (error) {
    event.reply('錯誤')
  }
}
