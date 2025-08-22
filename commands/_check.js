/*CMD
  command: /check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

function displayUsers() {
  let users = Bot.getProperty("userList", []); // Retrieve the saved user list
  if (users.length === 0) {
    Bot.sendMessage("No users available.");
    return;
  }
  
  let text = users.map(user => {
    let balance = Libs.ResourcesLib.anotherUserRes("balance", user.id); // Fetch live balance
    return `📛 Name :- ${user.name}\n🆔 ID :- ${user.id}\n💰 Balance :- ${balance.value()}\n\n`;
  }).join('');
  
  Bot.sendMessage(text);
}

// Example command to display users and their balances: /list
if (message == "/check") {
  displayUsers(); // Call the display function to show users with live balances
}

