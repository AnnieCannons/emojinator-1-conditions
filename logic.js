// Add your business logic functions below!
function getEmoji(emojiType){
    if (emojiType === "smile"){
        return "☺"
    }else if (emojiType === "frown"){
        return "☹"
    }else if (emojiType === "heart"){
        return "❤"
    }else if (emojiType === "star"){
        return "⭐"
    }else if ( emojiType === "money"){
        return "💰"
    }else if ( (emojiType === "love")||(emojiType === "heart eyes") ){
        return "😍"
    }else if ( emojiType === "loved"){
        return "🥰"
    }else if ( (emojiType === "heart kiss face") || (emojiType === "kiss")){
        return "😘"
    }else if ( emojiType === "Monkey"){
        return "🐵"
    }else if ( emojiType === "lips"){
        return "🫦"
    }else if ( (emojiType === " cold") || (emojiType === " freezing "))
    {
        return "🥶"
    }else if ((emojiType === "hot") || (emojiType === "burning ")){
        return "🥵"
    }else{
        return null;
    }
}
