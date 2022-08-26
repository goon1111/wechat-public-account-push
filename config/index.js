export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx0468a4b116bb5cc8",
    // 公众号appSecret
    appSecret: "edcb0887848591645711273d94e5d5ef",
    // 模板消息id
    templateId: "pQVM6lkvR5Cx7roEQxNpviYG7QDz9nr8NWdDAEPs_x8",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [],
     
    // 信息配置
    // 所在省份
    province: "河北",
    // 所在城市
    city: "邯郸",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "张有理", "year": "1999", "date": "01-06", "type": 'new'},
    ],
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
