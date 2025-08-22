/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var welco = User.getProperty("new")
if (welco == undefined) {
var user_notification ="<b>🎉 New User Has Started Your Bot</b>\n\n🆔 User ID = "+user.telegramid+"\n\n👤 Username = <b>@" +user.username+"</b>\n\n🔠 Name = "+user.first_name+""
Api.sendMessage({
  chat_id: "5084153092",
  text: user_notification,
  parse_mode: "HTML"
})
User.setProperty("new", user.telegramid, "text")}
Bot.sendKeyboard(
  "💬 Comments\n➕ Deposit,💰 Balance\n🔥 More Bots,☎️ Support",
  "*⭐ Welcome to Twitter Comments Bot.*\n\n❓ How to use the bot :-\n👉 /howtouse\n\n❓ How to deposit funds :-\n👉 /howtodeposit"
)



