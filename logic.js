// Add your business logic functions below!
/*
else if ((input.toLowerCase().trim() === '') || (input.toLowerCase().trim() === '') || (input.toLowerCase().trim() === '') || (input.toLowerCase().trim() === '') || (input.toLowerCase().trim() === '')){
    return ''
    }

   else  if (input.toLowerCase().trim() === ''){
    return ''
    }
*/


function getEmoji(input) {
    if (input.toLowerCase().trim() === 'smile') {
        return '☺';
    } else if (input.toLowerCase().trim() === 'frown') {
        return '☹';
    } else if (input.toLowerCase().trim() === 'heart') {
        return '❤';
    } else if (input.toLowerCase().trim() === 'star') {
        return '⭐';
    } else if (input.toLowerCase().trim() === 'spinosaur') {
        return null;
    } else if (input.toLowerCase().trim() === 'robo t-rex') {
        return null;
    } else if ((input.toLowerCase().trim() === 'stressed') || (input.toLowerCase().trim() === 'overwhelmed') || (input.toLowerCase().trim() === 'maxed')) {
        return '🫠'
    } else if ((input.toLowerCase().trim() === 'tired') || (input.toLowerCase().trim() === 'exhausted') ||(input.toLowerCase().trim() === 'sleepy')){
        return '🪫'
    } else if ((input.toLowerCase().trim() === 'sick') || (input.toLowerCase().trim() === 'ill') ||(input.toLowerCase().trim() === 'sickness')){
        return '🤒'
    } else if ((input.toLowerCase().trim() === 'covid') || (input.toLowerCase().trim() === 'covid19') ||(input.toLowerCase().trim() === 'coronavirus')){
        return '😷'
    } else if ((input.toLowerCase().trim() === 'fire') || (input.toLowerCase().trim() === 'flame') ||(input.toLowerCase().trim() === 'burn')){
        return '🔥'
    } else if ((input.toLowerCase().trim() === 'code') || (input.toLowerCase().trim() === 'coding') || (input.toLowerCase().trim() === 'programming') || (input.toLowerCase().trim() === 'anniecannons') || (input.toLowerCase().trim() === 'mac')){
        return '💻'
    } else if ((input.toLowerCase().trim() === 'food') || (input.toLowerCase().trim() === 'dinner') || (input.toLowerCase().trim() === 'lunch') || (input.toLowerCase().trim() === 'breakfast') || (input.toLowerCase().trim() === 'plate') || (input.toLowerCase().trim() === 'silverware')){
        return '🍽️'
    } else if (input.toLowerCase().trim() === 'partly cloudy') {
        return '🌤️';
    } else if (input.toLowerCase().trim() === 'mostly cloudy') {
        return '🌥️';
    } else if (input.toLowerCase().trim().trim() === 'showers') {
        return '🌦️';
    } else if (input.toLowerCase().trim() === 'rainy') {
        return '🌧️';
    } else if (input.toLowerCase().trim() === 'thunderstorms') {
        return 'Thunderstorms';
    } else if (input.toLowerCase().trim() === 'lightning') {
        return '⛈️';
    } else if (input.toLowerCase().trim() === 'tornado') {
        return '🌪️';
    } else if (input.toLowerCase().trim() === 'snowy') {
        return '❄️';
    } else if (input.toLowerCase().trim() === 'snow showers') {
        return '🌨️';
    } else if (input.toLowerCase().trim() === 'foggy') {
        return '🌫️';
    } else if (input.toLowerCase().trim() === 'windy') {
        return '🌬️';
    } else if (input.toLowerCase().trim() === 'wavy') {
        return '🌊';
    } else if (input.toLowerCase().trim() === 'volcano') {
        return '🌋';
    } else if (input.toLowerCase().trim() === 'sunrise') {
        return '🌄';
    } else if (input.toLowerCase().trim() === 'sunset') {
        return '🌅';
    } else if ((input.toLowerCase().trim() === 'rainbow') || (input.toLowerCase === 'pride')) {
        return '🌈';
    } else if (input.toLowerCase().trim() === 'cyclone') {
        return '🌀';
    } else if (input.toLowerCase().trim() === 'hazy') {
        return '🌁';
    } else if (input.toLowerCase().trim() === ' moon') {
        return '🌚';
    } if (input.toLowerCase().trim() === 'dog') {
        return '🐶';
    } else if (input.toLowerCase().trim() === 'cat') {
        return '🐱';
    } else if (input.toLowerCase().trim() === 'lion') {
        return '🦁';
    } else if (input.toLowerCase().trim() === 'tiger') {
        return '🐯';
    } else if (input.toLowerCase().trim() === 'bear') {
        return '🐻';
    } else if (input.toLowerCase().trim() === 'mouse') {
        return '🐭';
    } else if (input.toLowerCase().trim() === 'hamster') {
        return '🐹';
    } else if (input.toLowerCase().trim() === 'rabbit') {
        return '🐰';
    } else if (input.toLowerCase().trim() === 'fox') {
        return '🦊';
    } else if (input.toLowerCase().trim() === 'raccoon') {
        return '🦝';
    } else if (input.toLowerCase().trim() === 'koala') {
        return '🐨';
    } else if (input.toLowerCase().trim() === 'panda') {
        return '🐼';
    } else if (input.toLowerCase().trim() === 'unicorn') {
        return '🦄';
    } else if (input.toLowerCase().trim() === 'horse') {
        return '🐴';
    } else if (input.toLowerCase().trim() === 'cow') {
        return '🐮';
    } else if (input.toLowerCase().trim() === 'pig') {
        return '🐷';
    } else if (input.toLowerCase().trim() === 'chicken') {
        return '🐔';
    } else if (input.toLowerCase().trim() === 'bird') {
        return '🐦';
    } else if (input.toLowerCase().trim() === 'owl') {
        return '🦉';
    } else if (input.toLowerCase().trim() === 'peacock') {
        return '🦚';
    } else if (input.toLowerCase().trim() === 'parrot') {
        return '🦜';
    } else if (input.toLowerCase().trim() === 'swan') {
        return '🦢';
    } else if (input.toLowerCase().trim() === 'turtle') {
        return '🐢';
    } else if (input.toLowerCase().trim() === 'snake') {
        return '🐍';
    } else if (input.toLowerCase().trim() === 'crocodile') {
        return '🐊';
    } else if (input.toLowerCase().trim() === 'lizard') {
        return '🦎';
    } else if (input.toLowerCase().trim() === 'fish') {
        return '🐟';
    } else if (input.toLowerCase().trim() === 'shark') {
        return '🦈';
    } else if (input.toLowerCase().trim() === 'whale') {
        return '🐋';
    } else if (input.toLowerCase().trim() === 'octopus') {
        return '🐙';
    } else if (input.toLowerCase().trim() === 'pizza') {
        return '🍕';
    } else if (input.toLowerCase().trim() === 'hamburger') {
        return '🍔';
    } else if (input.toLowerCase().trim() === 'hotdog') {
        return '🌭';
    } else if (input.toLowerCase().trim() === 'taco') {
        return '🌮';
    } else if (input.toLowerCase().trim() === 'burrito') {
        return '🌯';
    } else if (input.toLowerCase().trim() === 'sushi') {
        return '🍣';
    } else if (input.toLowerCase().trim() === 'rice') {
        return '🍚';
    } else if (input.toLowerCase().trim() === 'noodle') {
        return '🍜';
    } else if (input.toLowerCase().trim() === 'spaghetti') {
        return '🍝';
    } else if (input.toLowerCase().trim() === 'french fries') {
        return '🍟';
    } else if (input.toLowerCase().trim() === 'doughnut') {
        return '🍩';
    } else if (input.toLowerCase().trim() === 'cookie') {
        return '🍪';
    } else if (input.toLowerCase().trim() === 'cake') {
        return '🍰';
    } else if (input.toLowerCase().trim() === 'ice cream') {
        return '🍦';
    } else if (input.toLowerCase().trim() === 'popcorn') {
        return '🍿';
    } else if (input.toLowerCase().trim() === 'coffee') {
        return '☕';
    } else if (input.toLowerCase().trim() === 'tea') {
        return '🍵';
    } else if (input.toLowerCase().trim() === 'beer') {
        return '🍺';
    } else if (input.toLowerCase().trim() === 'wine') {
        return '🍷';
    } else if (input.toLowerCase().trim() === 'cocktail') {
        return '🍸';
    } else if (input.toLowerCase().trim() === 'apple') {
        return '🍎';
    } else if (input.toLowerCase().trim() === 'banana') {
        return '🍌';
    } else if (input.toLowerCase().trim() === 'strawberry') {
        return '🍓';
    } else if (input.toLowerCase().trim() === 'tomato') {
        return '🍅';
    } else if (input.toLowerCase().trim() === 'carrot') {
        return '🥕';
    } else if (input.toLowerCase().trim() === 'broccoli') {
        return '🥦';
    } else if (input.toLowerCase().trim() === 'cheese') {
        return '🧀';
    } else if (input.toLowerCase().trim() === 'honey') {
        return '🍯';
    } else if (input.toLowerCase().trim() === 'bread') {
        return '🍞';
    } else if (input.toLowerCase().trim() === 'movie') {
        return '🎬';
    } else if (input.toLowerCase().trim() === 'music') {
        return '🎵';
    } else if (input.toLowerCase().trim() === 'game') {
        return '🎮';
    } else if (input.toLowerCase().trim() === 'book') {
        return '📖';
    } else if (input.toLowerCase().trim() === 'ticket') {
        return '🎫';
    } else if (input.toLowerCase().trim() === 'clapper') {
        return '🎬';
    } else if (input.toLowerCase().trim() === 'popcorn') {
        return '🍿';
    } else if (input.toLowerCase().trim() === 'camera') {
        return '📷';
    } else if (input.toLowerCase().trim() === 'microphone') {
        return '🎤';
    } else if (input.toLowerCase().trim() === 'guitar') {
        return '🎸';
    } else if (input.toLowerCase().trim() === 'video game') {
        return '🕹️';
    } else if (input.toLowerCase().trim() === 'headphones') {
        return '🎧';
    } else if (input.toLowerCase().trim() === 'art') {
        return '🎨';
    } else if (input.toLowerCase().trim() === 'dance') {
        return '💃';
    } else if (input.toLowerCase().trim() === 'carousel') {
        return '🎠';
    } else if (input.toLowerCase().trim() === 'slot machine') {
        return '🎰';
    } else if (input.toLowerCase().trim() === 'bowling') {
        return '🎳';
    } else if (input.toLowerCase().trim() === 'jigsaw') {
        return '🧩';
    } else if (input.toLowerCase().trim() === 'magic') {
        return '🪄';
    } else if (input.toLowerCase().trim() === 'home') {
        return '🏡';
    } else if (input.toLowerCase().trim() === 'office') {
        return '🏢';
    } else if (input.toLowerCase().trim() === 'hospital') {
        return '🏥';
    } else if (input.toLowerCase().trim() === 'park') {
        return '🏞️';
    } else if (input.toLowerCase().trim() === 'beach') {
        return '🏖️';
    } else if (input.toLowerCase().trim() === 'mountain') {
        return '⛰️';
    } else if (input.toLowerCase().trim() === 'city') {
        return '🏙️';
    } else if (input.toLowerCase().trim() === 'desert') {
        return '🏜️';
    } else if (input.toLowerCase().trim() === 'campground') {
        return '⛺';
    } else if (input.toLowerCase().trim() === 'restaurant') {
        return '🍽️';
    } else if (input.toLowerCase().trim() === 'cafe') {
        return '☕';
    } else if (input.toLowerCase().trim() === 'bank') {
        return '🏦';
    } else if (input.toLowerCase().trim() === 'post office') {
        return '🏣';
    } else if (input.toLowerCase().trim() === 'hotel') {
        return '🏨';
    } else if (input.toLowerCase().trim() === 'airport') {
        return '🛫';
    } else if (input.toLowerCase().trim() === 'train station') {
        return '🚉';
    } else if (input.toLowerCase().trim() === 'bus stop') {
        return '🚏';
    } else if (input.toLowerCase().trim() === 'gas station') {
        return '⛽';
    } else if (input.toLowerCase().trim() === 'happy') {
        return '😃';
    } else if (input.toLowerCase().trim() === 'sad') {
        return '😢';
    } else if (input.toLowerCase().trim() === 'angry') {
        return '😠';
    } else if (input.toLowerCase().trim() === 'surprised') {
        return '😮';
    } else if (input.toLowerCase().trim() === 'laughing') {
        return '😂';
    } else if (input.toLowerCase().trim() === 'crying') {
        return '😭';
    } else if (input.toLowerCase().trim() === 'smiling') {
        return '🙂';
    } else if (input.toLowerCase().trim() === 'winking') {
        return '😉';
    } else if (input.toLowerCase().trim() === 'confused') {
        return '😕';
    } else if (input.toLowerCase().trim() === 'shocked') {
        return '😲';
    } else if (input.toLowerCase().trim() === 'tongue') {
        return '😛';
    } else if (input.toLowerCase().trim() === 'cool') {
        return '😎';
    } else if (input.toLowerCase().trim() === 'love') {
        return '😍';
    } else if (input.toLowerCase().trim() === 'embarrassed') {
        return '😳';
    } else if (input.toLowerCase().trim() === 'crazy') {
        return '🤪';
    } else if (input.toLowerCase().trim() === 'dead') {
        return '💀';
    } else if (input.toLowerCase().trim() === 'thumbs up') {
        return '👍';
    } else if (input.toLowerCase().trim() === 'thumbs down') {
        return '👎';
    } else if (input.toLowerCase().trim() === 'clapping') {
        return '👏';
    } else if (input.toLowerCase().trim() === 'raising hand') {
        return '🙋';
    } else if (input.toLowerCase().trim() === 'waving hand') {
        return '👋';
    } else if (input.toLowerCase().trim() === 'peace') {
        return '🤝';
    } else if (input.toLowerCase().trim() === 'ok hand') {
        return '👌';
    } else if (input.toLowerCase().trim() === 'victory') {
        return '✌️';
    } else if (input.toLowerCase().trim() === 'fist bump') {
        return '🤜🤛';
    } else if (input.toLowerCase().trim() === 'praying') {
        return '🙏';
    } else if (input.toLowerCase().trim() === 'rock on') {
        return '🤘';
    } else if (input.toLowerCase().trim() === 'shaka') {
        return '🤙';
    } else if (input.toLowerCase().trim() === 'pointing up') {
        return '☝️';
    } else if (input.toLowerCase().trim() === 'pointing down') {
        return '👇';
    } else if (input.toLowerCase().trim() === 'pointing left') {
        return '👈';
    } else if (input.toLowerCase().trim() === 'pointing right') {
        return '👉';
    } else if (input.toLowerCase().trim() === 'book') {
        return '📚';
    } else if (input.toLowerCase().trim() === 'notebook') {
        return '📓';
    } else if (input.toLowerCase().trim() === 'pencil') {
        return '✏️';
    } else if (input.toLowerCase().trim() === 'school') {
        return '🏫';
    } else if (input.toLowerCase().trim() === 'teacher') {
        return '👩‍🏫';
    } else if (input.toLowerCase().trim() === 'student') {
        return '👨‍🎓';
    } else if (input.toLowerCase().trim() === 'graduation') {
        return '🎓';
    } else if (input.toLowerCase().trim() === 'classroom') {
        return '🎒';
    } else if (input.toLowerCase().trim() === 'microscope') {
        return '🔬';
    } else if (input.toLowerCase().trim() === 'test') {
        return '📝';
    } else if (input.toLowerCase().trim() === 'calculator') {
        return '🧮';
    } else if (input.toLowerCase().trim() === 'map') {
        return '🗺️';
    } else if (input.toLowerCase().trim() === 'globe') {
        return '🌍';
    } else if (input.toLowerCase().trim() === 'computer') {
        return '💻';
    } else if (input.toLowerCase().trim() === 'art supplies') {
        return '🎨';
    } else if (input.toLowerCase().trim() === 'backpack') {
        return '🎒';
    } else if (input.toLowerCase().trim() === 'library') {
        return '📖';
    } else if (input.toLowerCase().trim() === 'clock') {
        return '🕰️';
    } else if (input.toLowerCase().trim() === 'math') {
        return '➗';
    } else if (input.toLowerCase().trim() === 't-shirt') {
        return '👕';
    } else if (input.toLowerCase().trim() === 'jeans') {
        return '👖';
    } else if (input.toLowerCase().trim() === 'dress') {
        return '👗';
    } else if (input.toLowerCase().trim() === 'shoe') {
        return '👟';
    } else if (input.toLowerCase().trim() === 'sandal') {
        return '👡';
    } else if (input.toLowerCase().trim() === 'high heel') {
        return '👠';
    } else if (input.toLowerCase().trim() === 'boot') {
        return '👢';
    } else if (input.toLowerCase().trim() === 'hat') {
        return '🎩';
    } else if (input.toLowerCase().trim() === 'gloves') {
        return '🧤';
    } else if (input.toLowerCase().trim() === 'scarf') {
        return '🧣';
    } else if (input.toLowerCase().trim() === 'socks') {
        return '🧦';
    } else if (input.toLowerCase().trim() === 'coat') {
        return '🧥';
    } else if (input.toLowerCase().trim() === 'umbrella') {
        return '☂️';
    } else if (input.toLowerCase().trim() === 'tie') {
        return '👔';
    } else if (input.toLowerCase().trim() === 'jacket') {
        return '🧥';
    } else if (input.toLowerCase().trim() === 'pajamas') {
        return '🩰';
    } else if (input.toLowerCase().trim() === 'glasses') {
        return '👓';
    } else if (input.toLowerCase().trim() === 'crown') {
        return '👑';
    } else if (input.toLowerCase().trim() === 'jewelry') {
        return '💎';
    }  else if (input.toLowerCase().trim() === 'sunglasses') {
        return '🕶️';
    } else if (input.toLowerCase().trim() === 'watch') {
        return '⌚';
    } else if (input.toLowerCase().trim() === 'ring') {
        return '💍';
    } else if (input.toLowerCase().trim() === 'soccer') {
        return '⚽';
    } else if (input.toLowerCase().trim() === 'basketball') {
        return '🏀';
    } else if (input.toLowerCase().trim() === 'football') {
        return '🏈';
    } else if (input.toLowerCase().trim() === 'baseball') {
        return '⚾';
    } else if (input.toLowerCase().trim() === 'tennis') {
        return '🎾';
    } else if (input.toLowerCase().trim() === 'golf') {
        return '⛳';
    } else if (input.toLowerCase().trim() === 'bowling') {
        return '🎳';
    } else if (input.toLowerCase().trim() === 'swimming') {
        return '🏊';
    } else if (input.toLowerCase().trim() === 'surfing') {
        return '🏄';
    } else if (input.toLowerCase().trim() === 'skiing') {
        return '⛷️';
    } else if (input.toLowerCase().trim() === 'snowboarding') {
        return '🏂';
    } else if (input.toLowerCase().trim() === 'biking') {
        return '🚴';
    } else if (input.toLowerCase().trim() === 'running') {
        return '🏃';
    } else if (input.toLowerCase().trim() === 'weightlifting') {
        return '🏋️';
    } else if (input.toLowerCase().trim() === 'boxing') {
        return '🥊';
    } else if (input.toLowerCase().trim() === 'fishing') {
        return '🎣';
    } else if (input.toLowerCase().trim() === 'hiking') {
        return '🥾';
    } else if (input.toLowerCase().trim() === 'yoga') {
        return '🧘';
    } else if (input.toLowerCase().trim() === 'skateboarding') {
        return '🛹';
    } else if (input.toLowerCase().trim() === 'warning') {
        return '⚠️';
    } else if (input.toLowerCase().trim() === 'no entry') {
        return '⛔';
    } else if (input.toLowerCase().trim() === 'stop') {
        return '🛑';
    } else if (input.toLowerCase().trim() === 'no smoking') {
        return '🚭';
    } else if (input.toLowerCase().trim() === 'recycle') {
        return '♻️';
    } else if (input.toLowerCase().trim() === 'biohazard') {
        return '☣️';
    } else if (input.toLowerCase().trim() === 'wheelchair') {
        return '♿';
    } else if (input.toLowerCase().trim() === 'restroom') {
        return '🚻';
    } else if (input.toLowerCase().trim() === 'atm') {
        return '🏧';
    } else if (input.toLowerCase().trim() === 'parking') {
        return '🅿️';
    } else if (input.toLowerCase().trim() === 'male') {
        return '♂️';
    } else if (input.toLowerCase().trim() === 'female') {
        return '♀️';
    } else if (input.toLowerCase().trim() === 'transgender') {
        return '⚧️';
    } else if (input.toLowerCase().trim() === 'infinity') {
        return '∞';
    } else if (input.toLowerCase().trim() === 'yin yang') {
    return '☯️';
    } else if (input.toLowerCase().trim() === 'wrench') {
        return '🔧';
    } else if (input.toLowerCase().trim() === 'hammer') {
        return '🔨';
    } else if (input.toLowerCase().trim() === 'screwdriver') {
        return '🪛';
    } else if (input.toLowerCase().trim() === 'pliers') {
        return '🔩';
    } else if (input.toLowerCase().trim() === 'saw') {
        return '🪚';
    } else if (input.toLowerCase().trim() === 'paintbrush') {
        return '🖌️';
    } else if (input.toLowerCase().trim() === 'axe') {
        return '🪓';
    } else if (input.toLowerCase().trim() === 'knife') {
        return '🔪';
    } else if (input.toLowerCase().trim() === 'clamp') {
        return '🗜️';
    } else if (input.toLowerCase().trim() === 'toolbox') {
        return '🧰';
    } else if (input.toLowerCase().trim() === 'tape measure') {
        return '📏';
    } else if (input.toLowerCase().trim() === 'level') {
        return '📐';
    } else if (input.toLowerCase().trim() === 'drill') {
        return '🔌';
    } else if (input.toLowerCase().trim() === 'screw') {
        return '🧻';
    } else if (input.toLowerCase().trim() === 'nail') {
        return '🔨';
    } else if (input.toLowerCase().trim() === 'saw') {
        return '🪚';
    } else if (input.toLowerCase().trim() === 'hammer and wrench') {
        return '🛠️';
    } else if (input.toLowerCase().trim() === 'pick') {
        return '⛏️';
    } else if (input.toLowerCase().trim() === 'ladder') {
        return '🪜';
    } else if (input.toLowerCase().trim() === 'flower') {
        return '🌸';
    } else if (input.toLowerCase().trim() === 'tree') {
        return '🌳';
    } else if (input.toLowerCase().trim() === 'leaf') {
        return '🍃';
    } else if (input.toLowerCase().trim() === 'sunflower') {
        return '🌻';
    } else if (input.toLowerCase().trim() === 'rose') {
        return '🌹';
    } else if (input.toLowerCase().trim() === 'tulip') {
        return '🌷';
    } else if (input.toLowerCase().trim() === 'cactus') {
        return '🌵';
    } else if (input.toLowerCase().trim() === 'palm tree') {
        return '🌴';
    } else if (input.toLowerCase().trim() === 'mushroom') {
        return '🍄';
    } else if (input.toLowerCase().trim() === 'seedling') {
        return '🌱';
    } else if (input.toLowerCase().trim() === 'herb') {
        return '🌿';
    } else if (input.toLowerCase().trim() === 'four leaf clover') {
        return '🍀';
    } else if (input.toLowerCase().trim() === 'bamboo') {
        return '🎍';
    } else if (input.toLowerCase().trim() === 'hibiscus') {
        return '🌺';
    } else if (input.toLowerCase().trim() === 'cherry blossom') {
        return '🌸';
    } else if (input.toLowerCase().trim() === 'fallen leaf') {
        return '🍂';
    } else if (input.toLowerCase().trim() === 'evergreen tree') {
        return '🌲';
    } else if (input.toLowerCase().trim() === 'deciduous tree') {
        return '🌳';
    } else if (input.toLowerCase().trim() === 'potted plant') {
        return '🪴';
    } else if (input.toLowerCase().trim() === 'keyboard') {
        return '⌨️';
    } else if (input.toLowerCase().trim() === 'mouse') {
        return '🖱️';
    } else if (input.toLowerCase().trim() === 'laptop') {
        return '👩‍💻';
    } else if (input.toLowerCase().trim() === 'smartphone') {
        return '📱';
    } else if (input.toLowerCase().trim() === 'tablet') {
        return '📱';
    } else if (input.toLowerCase().trim() === 'printer') {
        return '🖨️';
    } else if (input.toLowerCase().trim() === 'camera') {
        return '📷';
    } else if (input.toLowerCase().trim() === 'television') {
        return '📺';
    } else if (input.toLowerCase().trim() === 'radio') {
        return '📻';
    } else if (input.toLowerCase().trim() === 'headphones') {
        return '🎧';
    } else if (input.toLowerCase().trim() === 'microphone') {
        return '🎤';
    } else if (input.toLowerCase().trim() === 'telephone') {
        return '☎️';
    } else if (input.toLowerCase().trim() === 'game controller') {
        return '🎮';
    } else if (input.toLowerCase().trim() === 'battery') {
        return '🔋';
    } else if (input.toLowerCase().trim() === 'electric plug') {
        return '🔌';
    } else if (input.toLowerCase().trim() === 'tv remote') {
        return '📺';
    } else if (input.toLowerCase().trim() === 'watch') {
        return '⌚';
    } else if (input.toLowerCase().trim() === 'cd') {
        return '💿';
    } else if (input.toLowerCase().trim() === 'man') {
        return '👨';
    } else if (input.toLowerCase().trim() === 'woman') {
        return '👩';
    } else if (input.toLowerCase().trim() === 'boy') {
        return '👦';
    } else if (input.toLowerCase().trim() === 'girl') {
        return '👧';
    } else if (input.toLowerCase().trim() === 'baby') {
        return '👶';
    } else if (input.toLowerCase().trim() === 'person') {
        return '🧑';
    } else if (input.toLowerCase().trim() === 'older man') {
        return '👴';
    } else if (input.toLowerCase().trim() === 'older woman') {
        return '👵';
    } else if (input.toLowerCase().trim() === 'man with beard') {
        return '🧔';
    } else if (input.toLowerCase().trim() === 'woman with headscarf') {
        return '🧕';
    } else if (input.toLowerCase().trim() === 'man in tuxedo') {
        return '🤵';
    } else if (input.toLowerCase().trim() === 'bride') {
        return '👰';
    } else if (input.toLowerCase().trim() === 'person in wheelchair') {
        return '🧑‍🦽';
    } else if (input.toLowerCase().trim() === 'person with cane') {
        return '🧑‍🦯';
    } else if (input.toLowerCase().trim() === 'person running') {
        return '🏃';
    } else if (input.toLowerCase().trim() === 'person swimming') {
        return '🏊';
    } else if (input.toLowerCase().trim() === 'person biking') {
        return '🚴';
    } else if (input.toLowerCase().trim() === 'person with umbrella') {
        return '🌂';
    } else if (input.toLowerCase().trim() === 'family') {
        return '👨‍👩‍👦';
    } else if (input.toLowerCase().trim() === 'christmas') {
        return '🎄';
    } else if (input.toLowerCase().trim() === 'halloween') {
        return '🎃';
    } else if (input.toLowerCase().trim() === 'easter') {
        return '🐰';
    } else if (input.toLowerCase().trim() === 'valentine') {
        return '❤️';
    } else if (input.toLowerCase().trim() === 'birthday') {
        return '🎂';
    } else if (input.toLowerCase().trim() === 'fireworks') {
        return '🎆';
    } else if (input.toLowerCase().trim() === 'new year') {
        return '🎉';
    } else if (input.toLowerCase().trim() === 'thanksgiving') {
        return '🦃';
    } else if (input.toLowerCase().trim() === 'july 4th') {
        return '🇺🇸';
    } else if (input.toLowerCase().trim() === 'easter egg') {
        return '🥚';
    } else if (input.toLowerCase().trim() === 'gift') {
        return '🎁';
    } else if (input.toLowerCase().trim() === 'firecracker') {
        return '🧨';
    } else if (input.toLowerCase().trim() === 'party') {
        return '🥳';
    } else if (input.toLowerCase().trim() === 'santa claus') {
        return '🎅';
    } else if (input.toLowerCase().trim() === 'ghost') {
        return '👻';
    } else if (input.toLowerCase().trim() === 'pumpkin') {
        return '🎃';
    } else if (input.toLowerCase().trim() === 'egg') {
        return '🥚';
    } else if (input.toLowerCase().trim() === 'heart') {
        return '❤️';
    } else if (input.toLowerCase().trim() === 'turkey') {
        return '🦃';
    } else if (input.toLowerCase().trim() === 'sun') {
        return '☀️';
    } else if (input.toLowerCase().trim() === 'sunny') {
        return '🌞';
    } else if (input.toLowerCase().trim() === 'sunrise') {
        return '🌅';
    } else if (input.toLowerCase().trim() === 'sunset') {
        return '🌇';
    } else if (input.toLowerCase().trim() === 'partly cloudy') {
        return '⛅';
    } else if (input.toLowerCase().trim() === 'cloudy') {
        return '☁️';
    } else if (input.toLowerCase().trim() === 'rainy') {
        return '🌧️';
    } else if (input.toLowerCase().trim() === 'thunderstorm') {
        return '⛈️';
    } else if (input.toLowerCase().trim() === 'snowy') {
        return '🌨️';
    } else if (input.toLowerCase().trim() === 'windy') {
        return '🌬️';
    } else if (input.toLowerCase().trim() === 'hot') {
        return '🔥';
    } else if (input.toLowerCase().trim() === 'cold') {
        return '❄️';
    } else if (input.toLowerCase().trim() === 'umbrella') {
        return '☂️';
    } else if (input.toLowerCase().trim() === 'thermometer') {
        return '🌡️';
    } else if (input.toLowerCase().trim() === 'car') {
        return '🚗';
    } else if (input.toLowerCase().trim() === 'truck') {
        return '🚚';
    } else if (input.toLowerCase().trim() === 'bus') {
        return '🚌';
    } else if (input.toLowerCase().trim() === 'motorcycle') {
        return '🏍️';
    } else if (input.toLowerCase().trim() === 'bicycle') {
        return '🚲';
    } else if (input.toLowerCase().trim() === 'taxi') {
        return '🚕';
    } else if (input.toLowerCase().trim() === 'police car') {
        return '🚓';
    } else if (input.toLowerCase().trim() === 'ambulance') {
        return '🚑';
    } else if (input.toLowerCase().trim() === 'fire truck') {
        return '🚒';
    } else if (input.toLowerCase().trim() === 'delivery truck') {
        return '🚚';
    } else if (input.toLowerCase().trim() === 'construction vehicle') {
        return '🚧';
    } else if (input.toLowerCase().trim() === 'minibus') {
        return '🚐';
    } else if (input.toLowerCase().trim() === 'racing car') {
        return '🏎️';
    } else if (input.toLowerCase().trim() === 'scooter') {
        return '🛴';
    } else if (input.toLowerCase().trim() === 'rocket') {
        return '🚀';
    } else if (input.toLowerCase().trim() === 'train') {
        return '🚆';
    } else if (input.toLowerCase().trim() === 'tram') {
        return '🚊';
    } else if (input.toLowerCase().trim() === 'metro') {
        return '🚇';
    } else if (input.toLowerCase().trim() === 'ferry') {
        return '⛴️';
    } else if (input.toLowerCase().trim() === 'house') {
        return '🏠';
    } else if (input.toLowerCase().trim() === 'apartment') {
        return '🏢';
    } else if (input.toLowerCase().trim() === 'office building') {
        return '🏢';
    } else if (input.toLowerCase().trim() === 'hospital') {
        return '🏥';
    } else if (input.toLowerCase().trim() === 'school') {
        return '🏫';
    } else if (input.toLowerCase().trim() === 'bank') {
        return '🏦';
    } else if (input.toLowerCase().trim() === 'store') {
        return '🏬';
    } else if (input.toLowerCase().trim() === 'hotel') {
        return '🏨';
    } else if (input.toLowerCase().trim() === 'mansion') {
        return '🏰';
    } else if (input.toLowerCase().trim() === 'castle') {
        return '🏰';
    } else if (input.toLowerCase().trim() === 'tent') {
        return '⛺';
    } else if (input.toLowerCase().trim() === 'church') {
        return '⛪';
    } else if (input.toLowerCase().trim() === 'mosque') {
        return '🕌';
    } else if (input.toLowerCase().trim() === 'synagogue') {
        return '🕍';
    } else if (input.toLowerCase().trim() === 'shinto shrine') {
        return '⛩️';
    } else if (input.toLowerCase().trim() === 'factory') {
        return '🏭';
    } else if (input.toLowerCase().trim() === 'construction site') {
        return '🏗️';
    } else if (input.toLowerCase().trim() === 'cityscape') {
        return '🌆';
    } else if (input.toLowerCase().trim() === 'suburb') {
        return '🏘️';
    } else if (input.toLowerCase() === 'happy') {
        return '😃';
    } else if (input.toLowerCase() === 'laughing') {
        return '😂';
    } else if (input.toLowerCase() === 'love') {
        return '❤️';
    } else if (input.toLowerCase() === 'sad') {
        return '😞';
    } else if (input.toLowerCase() === 'angry') {
        return '😡';
    } else if (input.toLowerCase() === 'crying') {
        return '😢';
    } else if (input.toLowerCase() === 'surprised') {
        return '😮';
    } else if (input.toLowerCase() === 'confused') {
        return '😕';
    } else if (input.toLowerCase() === 'excited') {
        return '😁';
    } else if (input.toLowerCase() === 'shocked') {
        return '😱';
    } else if (input.toLowerCase() === 'winking') {
        return '😉';
    } else if (input.toLowerCase() === 'blushing') {
        return '😊';
    } else if (input.toLowerCase() === 'worried') {
        return '😟';
    } else if (input.toLowerCase() === 'disappointed') {
        return '😞';
    } else if (input.toLowerCase() === 'tired') {
        return '😫';
    } else if (input.toLowerCase() === 'relieved') {
        return '😌';
    } else if (input.toLowerCase() === 'cool') {
        return '😎';
    } else if (input.toLowerCase() === 'silly') {
        return '🤪';
    } else if (input.toLowerCase() === 'hug') {
        return '🤗';
    }

    else {
        return `error`;
    }
}


