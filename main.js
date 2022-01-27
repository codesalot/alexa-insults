var insults = [
    "You're like a star. You think you're really bright, but you're just full of hot gas.",
    "If I had to discribe you in 25 words or less, I'd choose less.",
    "You dance like no one's watching, unfortunately for everyone who is.",
    "You may not be the best, you may not be the brightest. End of list",
    "If I had to choose an animal to describe you, I'd apologise, to the animal.",
    "You're a great example to others, of what not to do.",
    "You make me laugh, but not in a good way.",
    "Poets can't begin to describe you, but mathmaticians can. With a 1/10.",
    "A movie about your life would be amazing. As a cure for [sleeplessness]",
    "You're really brave. I mean, just look at what you're wearing.",
    "I cry when you leave the room. They're tears of joy.",
    "When I'm with you, I feel like I am on the moon. There's no atmosphere.",
    "You're good at letting things go, starting with yourself.",
    "You look like a work of art, a Picasso.",
    "You always exceed expectations. Of how annoying you can be.",
    "You make safety scissors look sharp.",
    "You're one of a kind. Thankfully.",
    "Thank's for chatting with me, I needed a good nap."
];

var currentInsult;
function insult() {
    currentInsult = insults[Math.floor(Math.random() * insults.length)];
    document.getElementById("insult").innerHTML = currentInsult;
}