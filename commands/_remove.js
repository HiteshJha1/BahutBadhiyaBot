/*CMD
  command: /remove
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// Function to remove a user by ID
function removeUser(id) {
  let users = Bot.getProperty("userList", []); // Retrieve the saved user list
  let userIndex = users.findIndex(user => user.id == id); // Find the index of the user with the given ID
  
  if (userIndex !== -1) {
    users.splice(userIndex, 1); // Remove the user from the list
    Bot.setProperty("userList", users, "json"); // Save the updated list globally
    Bot.sendMessage(`User with ID ${id} has been removed.`); // Confirmation message
  } else {
    Bot.sendMessage(`User with ID ${id} not found.`); // Error message if user not found
  }
}

// Command to handle removing users: /remove "id"
let command = message.split(" ");
if (command[0] == "/remove") {
  let id = command[1]; // The ID is expected to be the second part of the command

  if (id) {
    removeUser(id); // Call removeUser function if ID is provided
  } else {
    Bot.sendMessage("Usage: /remove [id]"); // Error message if input is incorrect
  }
}

