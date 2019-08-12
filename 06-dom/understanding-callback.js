function anotherAddEventListener(typeOfEvent, callback) {
  // Detect Event Code...
  var eventThatHappened = {
    eventType: "keydown",
	key: "p",
	durationOfKeydown: 2
  }
  
  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}

// Creating a function add event listener
anotherAddEventListener("keydown", function(event) {
  console.log(event)
});


// Proper function code
document.addEventListener("keydown", function(event) {
  console.log(event);
});