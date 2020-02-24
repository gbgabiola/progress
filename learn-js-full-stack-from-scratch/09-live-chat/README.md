# Live Chat

## Beginning Chat Feature

- First Part: User Experience (UX) and User Interface (UI), respond to click event of the icon to show the chat box interface
- Create a chat frontend module and `import` it in `main.js`
- Set a condition to only show chat feature when logged in
- Add event listener to chat icon
- Run only the open connection the first time the user open the chat


## Sending & Receiving Data

- Open a socket connection between the browser and the server, once established, server and browser will be listening for data from one another
- `npm install` and `require` **socket.io**
- `emit()` socket method will emit an event with a bit of data to the server, give it two (2) arguments
  - 1st: custom name to describe the type of event
  - 2nd: object with any data you want to send to the server
- after sending a chat message, clear out the field
- broadcast the chat message to all connected users


## Finishing Chat

- broadcast the chat message to all connected users in chat box
- Add the username and avatar who wrote each message in the chat dynamically
- `broadcast` property from socket, will emit the event to all connected browsers except the socket connection that sent the message in the first place
- Align the message you sent to the right with blue background and the message of the other person to the left with gray background
- Set the chat box to auto scroll to the latest chat using `scrollTop` and `scrollHeight` property
- Auto focus the chat box when opening the chat icon using `focus()` method
- Protect users from malicious users or scripts
- Sanitize any incoming message before sending to other users using **dompurify**
- Add a link to the username and avatar for their users profiles when `mouseover`


## Dynamic Title Tag 

- Set a condition if the title's `typeof` is `undefined` make a default title or else use the post title or profile user
