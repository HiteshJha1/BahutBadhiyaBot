/*CMD
  command: /howtouse
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

Api.forwardMessage({
  from_chat_id: -1002410896965, // Replace with the username or ID of the source channel
  message_id: 9// The ID of the message in the channel to forward
});
