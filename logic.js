// Add your business logic functions below!



function getEmoji(input) {
if ((input === "smile") || (input === "smiley") || (input == "happy")) {
return "☺"
} else if ((input === "frown") || (input === "frowny") || (input === "sad")) {
    return "☹"
} else if ((input === "star") || (input === "sparkle") || (input === "shiny")) {
    return "⭐"
} else if ((input === "heart") || (input === "love")) {
    return "❤"
} else {
    return null}
}