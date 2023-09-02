// Add your interface code below!
let userEmoji = prompt('describe your emoji . ')
let emoji = getEmoji(userEmoji)
 
if (emoji === null){
    console.log("Sorry we don't have an emoji matching this description. " + userEmoji )
 }else{
    console.log("you picked:" + emoji)
 }