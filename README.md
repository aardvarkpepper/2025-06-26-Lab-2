![Me Looking At Finished Assignment](./download.png)

## Reflection Questions

1.  How did event.preventDefault() help in handling form submission?

Form submissions normally pass arguments to the URL and reload the page.  Reloading the page causes loss of state data.  Using event.preventDefault() prevents passing arguments to URL and page reload, allowing state data to be retained.

2.  What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML5 validation may be performed in HTML without use of Javascript.  Quite a lot may be done with HTML validation with regex expressions and CSS styling for feedback, but more complicated validation rules or feedback messages require Javascript to handle.  Some users may have disabled Javascript or use browsers that inconsistently implement Javascript features, so using both HTML5 and Javascript validation can be useful.

3.  Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

localStorage was used to persist and retrieve username; once username entered it's stored in localStorage, on page load if username localStorage data exists, username input is populated with the localStorage data.  Any Javascript has access to localStorage, so sensitive data is not protected.

I got an alert that the password I entered in the form was compromised.  As it wasn't sent online and nothing was done, either my computer is compromised or it's a Chrome bug.

https://support.google.com/chrome/thread/260697326/password-you-used-was-found-in-a-data-breach?hl=en

4.  Describe a challenge you faced in implementing the real-time validation and how you solved it.

Getting regular expressions to work took more time than the entire rest of the lab.  Used regex101 in the end as regexr didn't work properly.  Looked up documentation, wrote expression, tested expression.

Otherwise, no difficulty in implementing field real-time validation.  For form validation, I initially used an object to set booleans on each field, but it wouldn't be triggered if "input" wasn't performed.  Specifically, it did not act as desired if input was initially valid, then changed to be invalid with Backspace, then form submitted. Updated to use .validity; resolved.

5.  How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

Custom error messages displayed on key press (addEventListener 'input' action) so were up to date.  Error-messages were customized to give examples or specific feedback.

## Resources

https://stackoverflow.com/questions/27809035/how-to-check-whether-an-element-has-an-id-in-pure-javascript-and-conditional-st
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://www.w3schools.com/jsref/event_onchange.asp
https://www.w3schools.com/jsref/dom_obj_event.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/
https://regexr.com/
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
https://regex101.com/


