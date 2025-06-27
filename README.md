![Me Looking At Finished Assignment](./download.png)

## Reflection Questions

1.  How did event.preventDefault() help in handling form submission?

Form submissions normally pass arguments to the URL and reload the page.  Reloading the page causes loss of state data.  Using event.preventDefault() prevents passing arguments to URL and page reload, allowing state data to be retained.

2.  What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML5 validation may be performed in HTML without use of Javascript.  Quite a lot may be done with HTML validation with regex expressions and CSS styling for feedback, but more complicated validation rules or feedback messages require Javascript to handle.  Some users may have disabled Javascript or use browsers that inconsistently implement Javascript features, so using both HTML5 and Javascript validation can be useful.

3.  Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

localStorage will have been used to persist and retrieve username; once username entered it's stored in localStorage, on page load if the username input is empty it's populated with the localStorage data.  Any Javascript has access to localStorage, so sensitive data is not protected.


4.  Describe a challenge you faced in implementing the real-time validation and how you solved it.



5.  How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

## Resources

https://stackoverflow.com/questions/27809035/how-to-check-whether-an-element-has-an-id-in-pure-javascript-and-conditional-st
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://www.w3schools.com/jsref/event_onchange.asp
https://www.w3schools.com/jsref/dom_obj_event.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/
https://regexr.com/
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


