/*CMD
  command: /in
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let users = Bot.getProperty("userList", []); // Retrieve or initialize an empty list

function addUser(name, id) {
  let newUser = { 
    name: name, 
    id: id
  };
  
  users.push(newUser); // Add the new user to the list
  Bot.setProperty("userList", users, "json"); // Save the updated list globally
  
  Bot.sendMessage(`User added: ${name} (ID: ${id})`); // Confirmation message
}

// Command to handle adding users: /in "name" "id"
let command = message.split(" ");
if (command[0] == "/in") {
  // Join the name back together, and take the last part as the ID
  let id = command.pop(); // This takes the last element of the array as the ID
  let name = command.slice(1).join(" "); // This joins the rest of the array as the name

  if (name && id) {
    addUser(name, id); // Call addUser function if name and id are provided
  } else {
    Bot.sendMessage("Usage: /in [name] [id]"); // Error message if input is incorrect
  }
}

