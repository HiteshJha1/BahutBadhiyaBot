/*CMD
  command: /setup
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

Libs.OxaPayLib.setMerchantKey("1P3MEY-RWYMH4-9D0MPD-SL5TZC");

// Get your payout api keys in https://app.oxapay.com/payout
// Libs.OxaPayLib.setPayoutApiKey("YOUR_PAYOUT_API_KEY");

Bot.sendMessage("Setup was completed successfully")
