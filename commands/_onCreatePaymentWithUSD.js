/*CMD
  command: /onCreatePaymentWithUSD
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

if (!options) return;
// You can store options if you want to inquire about the transaction status later
if (options.result == 100) {
var amount = User.getProperty("amounttopay")
  Api.sendMessage({
    text:
      "\👇 Please proceed the payment using the button below.\n\n_⚠️ Please note that the fees for blockchain transactions are not included in the cost. You are responsible for paying these fees separately._",
    parse_mode: "Markdown", // Specify Markdown parse mode
    reply_markup: {
      inline_keyboard: [
        [{ text: `✅ Pay ${amount}$`, web_app: { url: options.payLink } }]
      ]
    }
  });
}

