const Stored = sessionStorage.getItem("..."); // stored is a string, but isnt when its empty (undefined)
if (Stored) {
    equations = JSON.parse(Stored);
} else {
    equations = [];
    sessionStorage.setItem("key", equations); // key can be anything
}

// equals is pressed
// #1 get text in the textbox
// #2 show answer on screen
// #3 store in equations
// #4 overwrite sessionStorage

// Arrow
// #1 Find what equation is currently typed in the box
// #2 Change index depending on which arrow
// #3 Change text in the box