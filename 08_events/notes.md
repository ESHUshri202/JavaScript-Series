```javascript
//type
function getEventType(event) {
  const log = document.getElementById("log");
  log.innerText = `${event.type}\n${log.innerText}`;
}

// Keyboard events
document.addEventListener("keydown", getEventType, false); // first
document.addEventListener("keypress", getEventType, false); // second
document.addEventListener("keyup", getEventType, false); // third

// Mouse events
document.addEventListener("mousedown", getEventType, false); // first
document.addEventListener("mouseup", getEventType, false); // second
document.addEventListener("click", getEventType, false); // third


<!-- The type read-only property of the Event interface returns a string containing the event's type. It is set when the event is constructed and is the name commonly used to refer to the specific event, such as click, load, or error. -->

// timeStamp
<!-- The timeStamp read-only property of the Event interface returns the time (in milliseconds) at which the event was created. -->

function getTime(event) {
  const time = document.getElementById("time");
  time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener("keypress", getTime);

//defaultPrevented()
<!-- The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. -->

event.preventDefault();

//target
<!-- The read-only target property of the Event interface is a reference to the object onto which the event was dispatched. It is different from Event.currentTarget when the event handler is called during the bubbling or capturing phase of the event. -->

// Make a list
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target refers to the clicked <li> element
  // This is different from evt.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = "hidden";
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener("click", hide, false);


//srcElement
<!-- The deprecated Event.srcElement is an alias for the Event.target property. Use Event.target instead -->

//currentTarget
<!-- The currentTarget read-only property of the Event interface identifies the element to which the event handler has been attached. -->
const output = document.querySelector("#output");
const parent = document.querySelector("#parent");
parent.addEventListener("click", (event) => {
  const currentTarget = event.currentTarget.getAttribute("id");
  const target = event.target.getAttribute("id");
  output.textContent = `Current target: ${currentTarget}\n`;
  output.textContent += `Target: ${target}`;
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());


//clientX

//Async Code 
<!--
    -> Javascript :
            => Synchronus
            => Single Threaded
    -> Execution Context
            => Execute one line of code at a time 
            => console.log - 1 // each operation waits for the last one to complete before execution.
            => console.log - 2 
            (call stack) - (memory heap)

            ...Synchronous
            It executes code sequentially, one line at a time, in the order it's encountered.

            ...Single Threaded
            It was designed to be simple and efficient for its original use case of adding interactivity to web pages.
            
    Blocking Code 
    => Block the flow of program
    => Read file Sync.
    Vs
    Non Blocking Code
    => Does not block execution
    => Read file Async.





>

```
