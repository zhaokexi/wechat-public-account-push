export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx10edcd20716535d6",
    // 公众号appSecret
    appSecret: "8f704cf601f2ecf5112910934565e597",
    // 模板消息id
    templateId: "vyCqgfggZfo1bB8QcPnvW1Aj76AuM9MyU-2f1tN_rSc	",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [of6NN5gEs3VhAlCpVZiFwNaAOBc4],
     
    // 信息配置
    // 所在省份
    province: "山西",
    // 所在城市
    city: "古县",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "2004", "date": "08-15", "type": 'r'},
      {"name": "老公", "year": "2003", "date": "03-29", "type": 'r'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2021-10-01",
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
