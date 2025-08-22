/*CMD
  command: /add
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var key = "5084153092"
if (user.telegramid == key){
if (!params) {
Bot.sendMessage("⚠️ Invalid Format Master. Please Use /add [amount] [tgid]\n\n🔴 Example:- /add 1000 1878074681 ",{is_reply: true} );
return}
var msg = params.split(" ")
var amount = msg[0]
var tgid = msg[1]
var balance = Libs.ResourcesLib.userRes("balance");

if (message == "/add "+amount+" "+tgid+"") {
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*✅ Balance Added Successfully Master*\n\n*👤 User = "+tgid+"\n\n💰 Amount = "+amount+"*",{is_reply: true} );
Bot.sendMessageToChatWithId(
  tgid,
  "🥳 Your account has been credited by " + amount + " $ from admin.")
};
}else{
return
}
