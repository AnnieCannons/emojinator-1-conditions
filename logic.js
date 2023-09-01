// Add your business logic functions below!
/*
else if (input.toLowerCase() === ''){
    return alert(''), console.log(`%c `, style), document.write(getById
    }
*/


function getEmoji(input) {
    if (input.toLowerCase() === 'smile') {
        return '☺';
    } else if (input.toLowerCase() === 'frown') {
        return '☹';
    } else if (input.toLowerCase() === 'heart') {
        return '❤';
    } else if (input.toLowerCase() === 'star') {
        return '⭐';
    } else if (input.toLowerCase() === 'spinosaur') {
        return null;
    } else if (input.toLowerCase() === 'robo t-rex') {
        return null;
    } else if ((input.toLowerCase() === 'stressed') || (input.toLowerCase() === 'overwhelmed') || (input.toLowerCase() === 'maxed')) {
        return '🫠'
    }
    else {
        return `error`;
    }
}


