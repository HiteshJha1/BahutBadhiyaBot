/*CMD
  command: 💬 Comments
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Service :- *💬 Twitter Comments*

Description :- This service will help you to get comments on your twitter posts.

Price :- $0.03 per 1 comment

Note: While orders below 25 comments are possible (starting from 10), the charge will be based on 25 comments.

Quantity :- Min = 25 comments, Max = 50 comments

*➡️ Please send the link of your post where you want to add comments.*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /order
  group: 
CMD*/

let msg = message;

if (!msg.startsWith("https://x.com") && !msg.startsWith("https://twitter.com")) {
  var text = "*⚠️ Invalid Link*\n\n👉 The link must start with https://x.com or https://twitter.com";
  Api.sendMessage({
    text: text,
    parse_mode: "Markdown",
    reply_to_message_id: request.message_id,
    disable_web_page_preview: true
  });
  return false;
}

Bot.run({ command: "/startcomment", options: { link: msg } });
User.setProperty("link", msg, "string");
return true;
