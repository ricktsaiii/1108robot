// curl -v -X POST https://api.line.me/v2/bot/richmenu \
// -H 'Authorization: Bearer {3S+yCd3LyZm0hlEYKR7iIjZ6+U9JXgWX8m1f6eWmoJ5PrbPx9/HZGiHAK850K/6D9LKPDc5gKwZPjoRSPIn2484rXznAtXH0phIEQIVZpXF6PC3VFSeizSg1ud2ietCSffcOZsH+sv8pYR7LPuEsngdB04t89/1O/w1cDnyilFU=}' \
// -H 'Content-Type: application/json' \
// -d \
// '{
//     "size": {
//       "width": 2500,
//       "height": 843
//     },
//     "selected": false,
//     "name": "richmenu-demo-1",
//     "chatBarText": "LINE圖文選單範例",
//     "areas": [
//       {
//         "bounds": {
//           "x": 0,
//           "y": 0,
//           "width": 833,
//           "height": 843
//         },
//         "action": {
//           "type": "message",
//           "label": "文字",
//           "text": "Hello, World!"
//         }
//       },
//       {
//         "bounds": {
//           "x": 833,
//           "y": 0,
//           "width": 833,
//           "height": 843
//         },
//         "action": {
//           "type": "uri",
//           "label": "網址",
//           "uri": "https://medium.com/@augustus0818/line-bot-rich-menu-aa5fa67ac6ae"
//         }
//       },
//       {
//         "bounds": {
//           "x": 1666,
//           "y": 0,
//           "width": 833,
//           "height": 843
//         },
//         "action": {
//           "type": "location",
//           "label": "位置"
//         }
//       }
//    ]
// }'
