/*CMD
  command: /paydeposit
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

var amount = User.getProperty("amounttopay")
Libs.OxaPayLib.apiCall({url:"merchants/request", fields: {merchant: '1P3MEY-RWYMH4-9D0MPD-SL5TZC', amount: amount , onCallback: "/onCallbackPayment", orderId: "ORD-1"}, onSuccess: "/onCreatePaymentWithUSD" })
