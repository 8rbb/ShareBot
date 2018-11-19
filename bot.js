const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
ب مناسبة إفتتاح السيرفر
يوجد هناك جيف اوي على 40 الف كريدت (ل فائزين)
-----------------------------
مع افضل نظام إنفايت في الديسكورد
طلق نظآم في الدسكورد
-
3 invites = Code Spam 
جيب 5 تحصل كود سبام
-
كود سبام :يجيبلك بأسبوع مليون كريدتس
-----------------------------
آطلق نظآم في الدسكورد
-
5 invites = 8k Credit 
جيب 5 تحصل 8 آلف كريدت
-
https://discord.gg/dRRbbn8
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
ب مناسبة إفتتاح السيرفر
يوجد هناك جيف اوي على 40 الف كريدت (ل فائزين)
-----------------------------
مع افضل نظام إنفايت في الديسكورد
طلق نظآم في الدسكورد
-
3 invites = Code Spam 
جيب 5 تحصل كود سبام
-
كود سبام :يجيبلك بأسبوع مليون كريدتس
-----------------------------
آطلق نظآم في الدسكورد
-
5 invites = 8k Credit 
جيب 5 تحصل 8 آلف كريدت
-
https://discord.gg/dRRbbn8
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)
})
client.login('NTEzNzUyODE2MDA3Nzc0MjA4.DtSnDw.TAgUIBj0WOVT9KFVzMIaI9GRhy8');