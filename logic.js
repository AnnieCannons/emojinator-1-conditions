// Add your business logic functions below!
/*
else if ((input.toLowerCase() === '') || (input.toLowerCase() === '') || (input.toLowerCase() === '') || (input.toLowerCase() === '') || (input.toLowerCase() === '')){
    return ''
    }

   else  if (input.toLowerCase() === ''){
    return ''
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
    } else if ((input.toLowerCase() === 'tired') || (input.toLowerCase() === 'exhausted') ||(input.toLowerCase() === 'sleepy')){
        return '🪫'
    } else if ((input.toLowerCase() === 'sick') || (input.toLowerCase() === 'ill') ||(input.toLowerCase() === 'sickness')){
        return '🤒'
    } else if ((input.toLowerCase() === 'covid') || (input.toLowerCase() === 'covid19') ||(input.toLowerCase() === 'coronavirus')){
        return '😷'
    } else if ((input.toLowerCase() === 'fire') || (input.toLowerCase() === 'flame') ||(input.toLowerCase() === 'burn')){
        return '🔥'
    } else if ((input.toLowerCase() === 'code') || (input.toLowerCase() === 'coding') || (input.toLowerCase() === 'programming') || (input.toLowerCase() === 'anniecannons') || (input.toLowerCase() === 'mac')){
        return '💻'
    } else if ((input.toLowerCase() === 'food') || (input.toLowerCase() === 'dinner') || (input.toLowerCase() === 'lunch') || (input.toLowerCase() === 'breakfast') || (input.toLowerCase() === 'plate') || (input.toLowerCase() === 'silverware')){
        return '🍽️'
    } else if (input.toLowerCase() === 'partly cloudy') {
        return '🌤️';
    } else if (input.toLowerCase() === 'mostly cloudy') {
        return '🌥️';
    } else if (input.toLowerCase() === 'showers') {
        return '🌦️';
    } else if (input.toLowerCase() === 'rainy') {
        return '🌧️';
    } else if (input.toLowerCase() === 'thunderstorms') {
        return 'Thunderstorms';
    } else if (input.toLowerCase() === '🌩️ lightning') {
        return '⛈️';
    } else if (input.toLowerCase() === 'tornado') {
        return '🌪️';
    } else if (input.toLowerCase() === 'snowy') {
        return '❄️';
    } else if (input.toLowerCase() === 'snow showers') {
        return '🌨️';
    } else if (input.toLowerCase() === 'foggy') {
        return '🌫️';
    } else if (input.toLowerCase() === 'windy') {
        return '🌬️';
    } else if (input.toLowerCase() === 'wavy') {
        return '🌊';
    } else if (input.toLowerCase() === 'volcano') {
        return '🌋';
    } else if (input.toLowerCase() === 'sunrise') {
        return '🌄';
    } else if (input.toLowerCase() === 'sunset') {
        return '🌅';
    } else if ((input.toLowerCase() === 'rainbow') || (input.toLowerCase === 'pride')) {
        return '🌈';
    } else if (input.toLowerCase() === 'cyclone') {
        return '🌀';
    } else if (input.toLowerCase() === 'hazy') {
        return '🌁';
    } else if (input.toLowerCase() === ' moon') {
        return '🌚';
    } if (input.toLowerCase() === 'dog') {
        return '🐶';
    } else if (input.toLowerCase() === 'cat') {
        return '🐱';
    } else if (input.toLowerCase() === 'lion') {
        return '🦁';
    } else if (input.toLowerCase() === 'tiger') {
        return '🐯';
    } else if (input.toLowerCase() === 'bear') {
        return '🐻';
    } else if (input.toLowerCase() === 'mouse') {
        return '🐭';
    } else if (input.toLowerCase() === 'hamster') {
        return '🐹';
    } else if (input.toLowerCase() === 'rabbit') {
        return '🐰';
    } else if (input.toLowerCase() === 'fox') {
        return '🦊';
    } else if (input.toLowerCase() === 'raccoon') {
        return '🦝';
    } else if (input.toLowerCase() === 'koala') {
        return '🐨';
    } else if (input.toLowerCase() === 'panda') {
        return '🐼';
    } else if (input.toLowerCase() === 'unicorn') {
        return '🦄';
    } else if (input.toLowerCase() === 'horse') {
        return '🐴';
    } else if (input.toLowerCase() === 'cow') {
        return '🐮';
    } else if (input.toLowerCase() === 'pig') {
        return '🐷';
    } else if (input.toLowerCase() === 'chicken') {
        return '🐔';
    } else if (input.toLowerCase() === 'bird') {
        return '🐦';
    } else if (input.toLowerCase() === 'owl') {
        return '🦉';
    } else if (input.toLowerCase() === 'peacock') {
        return '🦚';
    } else if (input.toLowerCase() === 'parrot') {
        return '🦜';
    } else if (input.toLowerCase() === 'swan') {
        return '🦢';
    } else if (input.toLowerCase() === 'turtle') {
        return '🐢';
    } else if (input.toLowerCase() === 'snake') {
        return '🐍';
    } else if (input.toLowerCase() === 'crocodile') {
        return '🐊';
    } else if (input.toLowerCase() === 'lizard') {
        return '🦎';
    } else if (input.toLowerCase() === 'fish') {
        return '🐟';
    } else if (input.toLowerCase() === 'shark') {
        return '🦈';
    } else if (input.toLowerCase() === 'whale') {
        return '🐋';
    } else if (input.toLowerCase() === 'octopus') {
        return '🐙';
    } else if (input.toLowerCase() === 'pizza') {
        return '🍕';
    } else if (input.toLowerCase() === 'hamburger') {
        return '🍔';
    } else if (input.toLowerCase() === 'hotdog') {
        return '🌭';
    } else if (input.toLowerCase() === 'taco') {
        return '🌮';
    } else if (input.toLowerCase() === 'burrito') {
        return '🌯';
    } else if (input.toLowerCase() === 'sushi') {
        return '🍣';
    } else if (input.toLowerCase() === 'rice') {
        return '🍚';
    } else if (input.toLowerCase() === 'noodle') {
        return '🍜';
    } else if (input.toLowerCase() === 'spaghetti') {
        return '🍝';
    } else if (input.toLowerCase() === 'french fries') {
        return '🍟';
    } else if (input.toLowerCase() === 'doughnut') {
        return '🍩';
    } else if (input.toLowerCase() === 'cookie') {
        return '🍪';
    } else if (input.toLowerCase() === 'cake') {
        return '🍰';
    } else if (input.toLowerCase() === 'ice cream') {
        return '🍦';
    } else if (input.toLowerCase() === 'popcorn') {
        return '🍿';
    } else if (input.toLowerCase() === 'coffee') {
        return '☕';
    } else if (input.toLowerCase() === 'tea') {
        return '🍵';
    } else if (input.toLowerCase() === 'beer') {
        return '🍺';
    } else if (input.toLowerCase() === 'wine') {
        return '🍷';
    } else if (input.toLowerCase() === 'cocktail') {
        return '🍸';
    } else if (input.toLowerCase() === 'apple') {
        return '🍎';
    } else if (input.toLowerCase() === 'banana') {
        return '🍌';
    } else if (input.toLowerCase() === 'strawberry') {
        return '🍓';
    } else if (input.toLowerCase() === 'tomato') {
        return '🍅';
    } else if (input.toLowerCase() === 'carrot') {
        return '🥕';
    } else if (input.toLowerCase() === 'broccoli') {
        return '🥦';
    } else if (input.toLowerCase() === 'cheese') {
        return '🧀';
    } else if (input.toLowerCase() === 'honey') {
        return '🍯';
    } else if (input.toLowerCase() === 'bread') {
        return '🍞';
    } else if (input.toLowerCase() === 'movie') {
        return '🎬';
    } else if (input.toLowerCase() === 'music') {
        return '🎵';
    } else if (input.toLowerCase() === 'game') {
        return '🎮';
    } else if (input.toLowerCase() === 'book') {
        return '📖';
    } else if (input.toLowerCase() === 'ticket') {
        return '🎫';
    } else if (input.toLowerCase() === 'clapper') {
        return '🎬';
    } else if (input.toLowerCase() === 'popcorn') {
        return '🍿';
    } else if (input.toLowerCase() === 'camera') {
        return '📷';
    } else if (input.toLowerCase() === 'microphone') {
        return '🎤';
    } else if (input.toLowerCase() === 'guitar') {
        return '🎸';
    } else if (input.toLowerCase() === 'video game') {
        return '🕹️';
    } else if (input.toLowerCase() === 'headphones') {
        return '🎧';
    } else if (input.toLowerCase() === 'art') {
        return '🎨';
    } else if (input.toLowerCase() === 'dance') {
        return '💃';
    } else if (input.toLowerCase() === 'carousel') {
        return '🎠';
    } else if (input.toLowerCase() === 'slot machine') {
        return '🎰';
    } else if (input.toLowerCase() === 'bowling') {
        return '🎳';
    } else if (input.toLowerCase() === 'jigsaw') {
        return '🧩';
    } else if (input.toLowerCase() === 'magic') {
        return '🪄';
    } else if (input.toLowerCase() === 'home') {
        return '🏡';
    } else if (input.toLowerCase() === 'office') {
        return '🏢';
    } else if (input.toLowerCase() === 'hospital') {
        return '🏥';
    } else if (input.toLowerCase() === 'park') {
        return '🏞️';
    } else if (input.toLowerCase() === 'beach') {
        return '🏖️';
    } else if (input.toLowerCase() === 'mountain') {
        return '⛰️';
    } else if (input.toLowerCase() === 'city') {
        return '🏙️';
    } else if (input.toLowerCase() === 'desert') {
        return '🏜️';
    } else if (input.toLowerCase() === 'campground') {
        return '⛺';
    } else if (input.toLowerCase() === 'restaurant') {
        return '🍽️';
    } else if (input.toLowerCase() === 'cafe') {
        return '☕';
    } else if (input.toLowerCase() === 'bank') {
        return '🏦';
    } else if (input.toLowerCase() === 'post office') {
        return '🏣';
    } else if (input.toLowerCase() === 'hotel') {
        return '🏨';
    } else if (input.toLowerCase() === 'airport') {
        return '🛫';
    } else if (input.toLowerCase() === 'train station') {
        return '🚉';
    } else if (input.toLowerCase() === 'bus stop') {
        return '🚏';
    } else if (input.toLowerCase() === 'gas station') {
        return '⛽';
    } else if (input.toLowerCase() === 'happy') {
        return '😃';
    } else if (input.toLowerCase() === 'sad') {
        return '😢';
    } else if (input.toLowerCase() === 'angry') {
        return '😠';
    } else if (input.toLowerCase() === 'surprised') {
        return '😮';
    } else if (input.toLowerCase() === 'laughing') {
        return '😂';
    } else if (input.toLowerCase() === 'crying') {
        return '😭';
    } else if (input.toLowerCase() === 'smiling') {
        return '🙂';
    } else if (input.toLowerCase() === 'winking') {
        return '😉';
    } else if (input.toLowerCase() === 'confused') {
        return '😕';
    } else if (input.toLowerCase() === 'shocked') {
        return '😲';
    } else if (input.toLowerCase() === 'tongue') {
        return '😛';
    } else if (input.toLowerCase() === 'cool') {
        return '😎';
    } else if (input.toLowerCase() === 'love') {
        return '😍';
    } else if (input.toLowerCase() === 'embarrassed') {
        return '😳';
    } else if (input.toLowerCase() === 'crazy') {
        return '🤪';
    } else if (input.toLowerCase() === 'dead') {
        return '💀';
    } else if (input.toLowerCase() === 'thumbs up') {
        return '👍';
    } else if (input.toLowerCase() === 'thumbs down') {
        return '👎';
    } else if (input.toLowerCase() === 'clapping') {
        return '👏';
    } else if (input.toLowerCase() === 'raising hand') {
        return '🙋';
    } else if (input.toLowerCase() === 'waving hand') {
        return '👋';
    } else if (input.toLowerCase() === 'peace') {
        return '🤝';
    } else if (input.toLowerCase() === 'ok hand') {
        return '👌';
    } else if (input.toLowerCase() === 'victory') {
        return '✌️';
    } else if (input.toLowerCase() === 'fist bump') {
        return '🤜🤛';
    } else if (input.toLowerCase() === 'praying') {
        return '🙏';
    } else if (input.toLowerCase() === 'rock on') {
        return '🤘';
    } else if (input.toLowerCase() === 'shaka') {
        return '🤙';
    } else if (input.toLowerCase() === 'pointing up') {
        return '☝️';
    } else if (input.toLowerCase() === 'pointing down') {
        return '👇';
    } else if (input.toLowerCase() === 'pointing left') {
        return '👈';
    } else if (input.toLowerCase() === 'pointing right') {
        return '👉';
    } else if (input.toLowerCase() === 'book') {
        return '📚';
    } else if (input.toLowerCase() === 'notebook') {
        return '📓';
    } else if (input.toLowerCase() === 'pencil') {
        return '✏️';
    } else if (input.toLowerCase() === 'school') {
        return '🏫';
    } else if (input.toLowerCase() === 'teacher') {
        return '👩‍🏫';
    } else if (input.toLowerCase() === 'student') {
        return '👨‍🎓';
    } else if (input.toLowerCase() === 'graduation') {
        return '🎓';
    } else if (input.toLowerCase() === 'classroom') {
        return '🎒';
    } else if (input.toLowerCase() === 'microscope') {
        return '🔬';
    } else if (input.toLowerCase() === 'test') {
        return '📝';
    } else if (input.toLowerCase() === 'calculator') {
        return '🧮';
    } else if (input.toLowerCase() === 'map') {
        return '🗺️';
    } else if (input.toLowerCase() === 'globe') {
        return '🌍';
    } else if (input.toLowerCase() === 'computer') {
        return '💻';
    } else if (input.toLowerCase() === 'art supplies') {
        return '🎨';
    } else if (input.toLowerCase() === 'backpack') {
        return '🎒';
    } else if (input.toLowerCase() === 'library') {
        return '📖';
    } else if (input.toLowerCase() === 'clock') {
        return '🕰️';
    } else if (input.toLowerCase() === 'math') {
        return '➗';
    } else if (input.toLowerCase() === 't-shirt') {
        return '👕';
    } else if (input.toLowerCase() === 'jeans') {
        return '👖';
    } else if (input.toLowerCase() === 'dress') {
        return '👗';
    } else if (input.toLowerCase() === 'shoe') {
        return '👟';
    } else if (input.toLowerCase() === 'sandal') {
        return '👡';
    } else if (input.toLowerCase() === 'high heel') {
        return '👠';
    } else if (input.toLowerCase() === 'boot') {
        return '👢';
    } else if (input.toLowerCase() === 'hat') {
        return '🎩';
    } else if (input.toLowerCase() === 'gloves') {
        return '🧤';
    } else if (input.toLowerCase() === 'scarf') {
        return '🧣';
    } else if (input.toLowerCase() === 'socks') {
        return '🧦';
    } else if (input.toLowerCase() === 'coat') {
        return '🧥';
    } else if (input.toLowerCase() === 'umbrella') {
        return '☂️';
    } else if (input.toLowerCase() === 'tie') {
        return '👔';
    } else if (input.toLowerCase() === 'jacket') {
        return '🧥';
    } else if (input.toLowerCase() === 'pajamas') {
        return '🩰';
    } else if (input.toLowerCase() === 'glasses') {
        return '👓';
    } else if (input.toLowerCase() === 'crown') {
        return '👑';
    } else if (input.toLowerCase() === 'jewelry') {
        return '💎';
    }  else if (input.toLowerCase() === 'sunglasses') {
        return '🕶️';
    } else if (input.toLowerCase() === 'watch') {
        return '⌚';
    } else if (input.toLowerCase() === 'ring') {
        return '💍';
    } else if (input.toLowerCase() === 'soccer') {
        return '⚽';
    } else if (input.toLowerCase() === 'basketball') {
        return '🏀';
    } else if (input.toLowerCase() === 'football') {
        return '🏈';
    } else if (input.toLowerCase() === 'baseball') {
        return '⚾';
    } else if (input.toLowerCase() === 'tennis') {
        return '🎾';
    } else if (input.toLowerCase() === 'golf') {
        return '⛳';
    } else if (input.toLowerCase() === 'bowling') {
        return '🎳';
    } else if (input.toLowerCase() === 'swimming') {
        return '🏊';
    } else if (input.toLowerCase() === 'surfing') {
        return '🏄';
    } else if (input.toLowerCase() === 'skiing') {
        return '⛷️';
    } else if (input.toLowerCase() === 'snowboarding') {
        return '🏂';
    } else if (input.toLowerCase() === 'biking') {
        return '🚴';
    } else if (input.toLowerCase() === 'running') {
        return '🏃';
    } else if (input.toLowerCase() === 'weightlifting') {
        return '🏋️';
    } else if (input.toLowerCase() === 'boxing') {
        return '🥊';
    } else if (input.toLowerCase() === 'fishing') {
        return '🎣';
    } else if (input.toLowerCase() === 'hiking') {
        return '🥾';
    } else if (input.toLowerCase() === 'yoga') {
        return '🧘';
    } else if (input.toLowerCase() === 'skateboarding') {
        return '🛹';
    } else if (input.toLowerCase() === 'warning') {
        return '⚠️';
    } else if (input.toLowerCase() === 'no entry') {
        return '⛔';
    } else if (input.toLowerCase() === 'stop') {
        return '🛑';
    } else if (input.toLowerCase() === 'no smoking') {
        return '🚭';
    } else if (input.toLowerCase() === 'recycle') {
        return '♻️';
    } else if (input.toLowerCase() === 'biohazard') {
        return '☣️';
    } else if (input.toLowerCase() === 'wheelchair') {
        return '♿';
    } else if (input.toLowerCase() === 'restroom') {
        return '🚻';
    } else if (input.toLowerCase() === 'atm') {
        return '🏧';
    } else if (input.toLowerCase() === 'parking') {
        return '🅿️';
    } else if (input.toLowerCase() === 'male') {
        return '♂️';
    } else if (input.toLowerCase() === 'female') {
        return '♀️';
    } else if (input.toLowerCase() === 'transgender') {
        return '⚧️';
    } else if (input.toLowerCase() === 'infinity') {
        return '∞';
    } else if (input.toLowerCase() === 'yin yang') {
    return '☯️';
    } else if (input.toLowerCase() === 'wrench') {
        return '🔧';
    } else if (input.toLowerCase() === 'hammer') {
        return '🔨';
    } else if (input.toLowerCase() === 'screwdriver') {
        return '🪛';
    } else if (input.toLowerCase() === 'pliers') {
        return '🔩';
    } else if (input.toLowerCase() === 'saw') {
        return '🪚';
    } else if (input.toLowerCase() === 'paintbrush') {
        return '🖌️';
    } else if (input.toLowerCase() === 'axe') {
        return '🪓';
    } else if (input.toLowerCase() === 'knife') {
        return '🔪';
    } else if (input.toLowerCase() === 'clamp') {
        return '🗜️';
    } else if (input.toLowerCase() === 'toolbox') {
        return '🧰';
    } else if (input.toLowerCase() === 'tape measure') {
        return '📏';
    } else if (input.toLowerCase() === 'level') {
        return '📐';
    } else if (input.toLowerCase() === 'drill') {
        return '🔌';
    } else if (input.toLowerCase() === 'screw') {
        return '🧻';
    } else if (input.toLowerCase() === 'nail') {
        return '🔨';
    } else if (input.toLowerCase() === 'saw') {
        return '🪚';
    } else if (input.toLowerCase() === 'hammer and wrench') {
        return '🛠️';
    } else if (input.toLowerCase() === 'pick') {
        return '⛏️';
    } else if (input.toLowerCase() === 'ladder') {
        return '🪜';
    } else if (input.toLowerCase() === 'flower') {
        return '🌸';
    } else if (input.toLowerCase() === 'tree') {
        return '🌳';
    } else if (input.toLowerCase() === 'leaf') {
        return '🍃';
    } else if (input.toLowerCase() === 'sunflower') {
        return '🌻';
    } else if (input.toLowerCase() === 'rose') {
        return '🌹';
    } else if (input.toLowerCase() === 'tulip') {
        return '🌷';
    } else if (input.toLowerCase() === 'cactus') {
        return '🌵';
    } else if (input.toLowerCase() === 'palm tree') {
        return '🌴';
    } else if (input.toLowerCase() === 'mushroom') {
        return '🍄';
    } else if (input.toLowerCase() === 'seedling') {
        return '🌱';
    } else if (input.toLowerCase() === 'herb') {
        return '🌿';
    } else if (input.toLowerCase() === 'four leaf clover') {
        return '🍀';
    } else if (input.toLowerCase() === 'bamboo') {
        return '🎍';
    } else if (input.toLowerCase() === 'hibiscus') {
        return '🌺';
    } else if (input.toLowerCase() === 'cherry blossom') {
        return '🌸';
    } else if (input.toLowerCase() === 'fallen leaf') {
        return '🍂';
    } else if (input.toLowerCase() === 'evergreen tree') {
        return '🌲';
    } else if (input.toLowerCase() === 'deciduous tree') {
        return '🌳';
    } else if (input.toLowerCase() === 'potted plant') {
        return '🪴';
    } else if (input.toLowerCase() === 'keyboard') {
        return '⌨️';
    } else if (input.toLowerCase() === 'mouse') {
        return '🖱️';
    } else if (input.toLowerCase() === 'laptop') {
        return '👩‍💻';
    } else if (input.toLowerCase() === 'smartphone') {
        return '📱';
    } else if (input.toLowerCase() === 'tablet') {
        return '📱';
    } else if (input.toLowerCase() === 'printer') {
        return '🖨️';
    } else if (input.toLowerCase() === 'camera') {
        return '📷';
    } else if (input.toLowerCase() === 'television') {
        return '📺';
    } else if (input.toLowerCase() === 'radio') {
        return '📻';
    } else if (input.toLowerCase() === 'headphones') {
        return '🎧';
    } else if (input.toLowerCase() === 'microphone') {
        return '🎤';
    } else if (input.toLowerCase() === 'telephone') {
        return '☎️';
    } else if (input.toLowerCase() === 'game controller') {
        return '🎮';
    } else if (input.toLowerCase() === 'battery') {
        return '🔋';
    } else if (input.toLowerCase() === 'electric plug') {
        return '🔌';
    } else if (input.toLowerCase() === 'tv remote') {
        return '📺';
    } else if (input.toLowerCase() === 'watch') {
        return '⌚';
    } else if (input.toLowerCase() === 'cd') {
        return '💿';
    } 

    else {
        return `error`;
    }
}


