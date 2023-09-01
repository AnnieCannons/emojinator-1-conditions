// Add your business logic functions below!
/*
else if (input.toLowerCase() === ''){
    return ''
    }
*/
function getEmoji(input) {
    if (input.toLowerCase() === 'smile') {
    return '☺';
    } else if (input.toLowerCase() === 'frown') {
    return '☹';
    } else if (input.toLowerCase() === 'heart'){
        return '❤';
        } else if (input.toLowerCase() === 'star'){
            return '⭐';
            } else if (input.toLowerCase() === 'spinosaur'){
                return null;
                } else if (input.toLowerCase() === 'robo t-rex'){
                    return null;
                } else {
                    return "Either that wasn't english or your SAT word outsmarted me!";
                }
}
