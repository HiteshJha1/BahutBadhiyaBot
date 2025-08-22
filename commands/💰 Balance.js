/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /balance
  group: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
Bot.sendMessage("👤 Name : "+user.first_name+"\n\n🆔 User ID : "+user.telegramid+"\n\n💰 Balance : "+balance.value().toFixed(2)+"",{is_reply: true});


