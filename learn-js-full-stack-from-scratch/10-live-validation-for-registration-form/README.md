# Live Validation for Registration Form

- Adding a server-side validation to the form is a necessity so that malicious user wouldn't not be able to disable client-side/front-end validation
- Adding validation to the client-side/front-end will just enhance the user experience (UX)
- Create a browser based js that will run after every keystroke and show any potential validation message right above the particular field in real time
- Be aware the some checks should run immediately but other checks should run after a delay
- Check the minimum and maximum characters for username and password
- Use regular expression to check for a non alphanumeric character, and valid email address
- Set the validation error `false` to hide it, then set it to `true` and show the validation error if there's an error
- Check to see if the user typed in is already exists
- `npm install` and `import` **axios** to send off an asynchronous request to the server
- Prevent the browser from submitting the form unless the validations are met using `preventDefault()` method
- Add `blur` key event after the `keyup` event
