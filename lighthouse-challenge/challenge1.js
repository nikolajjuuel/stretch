///challenge 1 
// Instructions
// (This challenge is worth 5 points)

// Click here to learn how to navigate the code editor

// Our latest testing indicates a malfunctioning component in our communications apparatus. For some reason, messages from mission control are not being correctly displayed on board the shuttle. While the message is being displayed on the shuttle’s terminal, the sender’s name is not displayed beside it.

// Your first task is to write a function that will take two string parameters and return a string containing the sender name and the message in the form specified in the instructions.


const parseMessage = (origin, message) => {
    return `${origin}: ${message}`
  }
  