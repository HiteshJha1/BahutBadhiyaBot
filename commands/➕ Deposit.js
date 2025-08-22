/*CMD
  command: ➕ Deposit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*➡️ Send the amount to deposit*

⚠️ Minimum Deposit :- $5
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /deposit
  group: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.runCommand("➕ Deposit", {
    is_reply: true
  })
  return
}
if (message < 5) {
  Bot.runCommand("➕ Deposit")
  return
}
let msg = message
User.setProperty("amounttopay", msg, "string");
Bot.runCommand("/paydeposit")


