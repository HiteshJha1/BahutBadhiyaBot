/*CMD
  command: /onCallbackPayment
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

var balance = Libs.ResourcesLib.userRes("balance")
if (!options) return
if (options.status == "Confirming")
  Bot.sendMessage(
    `✅ Your payment of ${options.payAmount} ${options.payCurrency} is under confirmation...`
  )
else if (options.status == "Paid") {
  var toadd = User.getProperty("amounttopay")
  Bot.sendMessage(
    `✅ Thanks for your purchase.\n\n💰 ${toadd}$ were added to your balance.`
  )
  balance.add(parseFloat(toadd))
  var admin_id = "5084153092"
  Api.sendMessage({
    chat_id: admin_id,
    text: `👤 Name :- ${user.first_name}\n\n🆔 User Id :- ${user.telegramid}\n\n✅ Paid :- $${toadd}`,
    disable_web_page_preview: true,
    parse_mode: "HTML"
  })
}
WebApp.render({
 content: "ok"
})
