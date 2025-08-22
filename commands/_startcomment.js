/*CMD
  command: /startcomment
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Format :-

Each comment should start with its number followed by a period and a space. For example :-

1. Great post!
2. Love the content here!

*➡️ Please send your list of comments*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var messageText = request.text;

// Split the message by new lines to get each comment
var comments = messageText.split(/\n+/).map(comment => comment.trim()).filter(comment => comment.length > 0);

// Validate that there are at least 10 comments and at most 50
if (comments.length < 10 || comments.length > 50) {
  Api.sendMessage({
    text: `⚠️ You must provide between 10 to 50 comments.`,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_to_message_id: request.message_id
  });
  return;
}

// Validate that each comment is correctly numbered
var isValid = true;
for (var i = 0; i < comments.length; i++) {
  var expectedPrefix = (i + 1) + ". ";
  if (!comments[i].startsWith(expectedPrefix)) {
    isValid = false;
    break;
  }
}

if (!isValid) {
  Api.sendMessage({
    text: `⚠️ <b>Invalid Input</b>\n\nEach comment should start with its number followed by a period and a space. For example :-\n\n1. Great post!\n2. Love the content here!\n\nPlease correct your comments and try again.`,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_to_message_id: request.message_id
  });
  return;
}

// Store the comments
User.setProperty("comments", comments, "json");

var actualAmount = comments.length; // Actual number of comments provided
var amount = Math.max(actualAmount, 25); // Minimum chargeable comments is 25
var balance = Libs.ResourcesLib.userRes("balance");

// Calculate the cost of comments
var costPerComment = 30 / 1000; // $0.03 per comment
var cost = amount * costPerComment;

// Check the balance
if (balance.value() < cost) {
  Bot.sendMessage({
    text: `⚠️ Your balance is not enough. You need $${cost.toFixed(2)} but you only have $${balance.value().toFixed(2)}.\n\nPlease top up your account in order to use the service.\n\n📞 Support: @BadassHacker`,
    parse_mode: "HTML",
    disable_web_page_preview: true
  });
  return;
}

// Create the comments list message with HTML monospaced formatting for comments only
var commentsList = comments.map((comment, index) => {
  var commentText = comment.substring(comment.indexOf(". ") + 2); // Remove the number prefix and space
  return `${index + 1}. <code>${commentText}</code>`; // Wrap comment text in <code> tags for monospacing
}).join('\n');

var linkk = User.getProperty("link");
var messageToAdmin = `Link :- ${linkk} \n\nReward :- 0.008 USDT\n\nTotal Count :- ${actualAmount}\n\nRules  :- <a href="https://t.me/c/1893199393/31731">⚠️ Click here to read</a>\n\nComments :-\n${commentsList}`;
var admin_id = "-1001936404566";
if (messageToAdmin.length > 4096) {
  Api.sendMessage({
    text: "Error: The message exceeds the 4096 character limit and cannot be sent.",
    parse_mode: "HTML",
    disable_web_page_preview: true
  });
} else {
  Api.sendMessage({
    chat_id: admin_id,
    text: messageToAdmin,
    parse_mode: "HTML",
    disable_web_page_preview: true
  });
  Api.sendMessage({
    text: `✅ Your order has been processed and will be started shortly.\n\n*️⃣ Order Details -\n\n-> Number of comments :- ${actualAmount} (charged for ${amount})\n-> Total cost :- $${cost.toFixed(2)}\n-> Remaining balance :- $${(balance.value() - cost).toFixed(2)}\n\n⚠️ If you need any help, contact <b>@BadassHacker.</b>`,
    parse_mode: "HTML",
    disable_web_page_preview: true
  });
  // Deduct the amount from the user's balance
  balance.add(-cost);
}

