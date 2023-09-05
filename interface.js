// Add your interface code below!
let userInput = prompt("Enter an emoji name.")



let emoji =getEmoji(userInput);

if (emoji ===null) 

{ console.log(`${userInput} is not a valid search term. The Emojinator currently recognizes the following words: smile, smiley, happy, frown, frowny, sad, star, sparkle, shiny, heart, love `)} else {
    console.log("Your emoji is " + emoji)
};
