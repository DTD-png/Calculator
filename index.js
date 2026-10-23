const Stored = sessionStorage.getItem("..."); // stored is a string, but isnt when its empty (undefined)
if (Stored) {
    equations = JSON.parse(Stored);
} else {
    equations = [];
    sessionStorage.setItem("key", equations); // key can be anything
}

let equation = [];

function equation() {
    function one() {equation.push[1];}
    function two() {equation.push[2]}
    function three() {equation.push[3]}
    function four() {equation.push[4]}
    function five() {equation.push[5]}
    function six() {equation.push[6]}
    function seven() {equation.push[7]}
    function eight() {equation.push[8];}
    function nine() {equation.push[9];}
    function zero() {equation.push[0];}

    function plus() {equation.push(+);}
}

function GO(){
    if (equation){
        document.getElementbyId(output).eval(equation);
    }


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