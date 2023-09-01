// Add your interface code below!
//let question = prompt('Type a one worded emotion here and check the console log to see what you get!\n(Hint: the more creative you are, the more detailed your results are)')

//console.log styling 

const style = `
font-size: 120px; 
font-weight: bold; 
color: black; 
text-shadow: 0 0 3px yellow, 0 0 6px yellow, 0 0 9px yellow, 0 0 15px white, 0 0 20px white; 
background-image: linear-gradient(to right bottom, #053713, #20611f, #448e25, #72bc23, #a8eb12);`

//console.log error message styling 

const errorFormat = `
font-size: 50px;
color: black;`

//'results' calls the 'getEmoji' and makes the argument the output of the prompt. Results have two outcomes and the location of designated outcome goes to the console.log and to the 'answer' element in the html file

function results() {
    var input = prompt('Type a one worded emoji here and see what you get!');
    let result = getEmoji(input);

    if ((result === 'undefined') || (result === 'error')) {
        alert(`🧐 either that wasn't english or I need to expand my vocabulary...`);
        document.getElementById("answer").innerHTML = `🙊?`
    }
    else {
        document.getElementById("answer").innerHTML = result;
        console.log(`%c${result}`, style)
    }
}

//function to reset the emoji generator which can be called on when clicking the 'reset' button in the html file

