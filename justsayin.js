//module.exports is an object so advice has to be an object or constructor?


var campaignTweets = [
".@kanyewest, @hebenrants doesn't think you're a punchline.", 
".@heavenrants gets you, @kanyewest.", 
".@kanyewest, @hebenrants appreciates your vanity.", 
".@kanyewest, go boldly assert yourself on @anotherround.", 
".@kanyewest, maybe you should interview with a Black journalist. go on @anotherround", 
".@kanyewest, be like @prince: create opportunities for Black journalists. go on @anotherround", 
".@kanyewest, we get you. go talk to @hebenrants on @anotherround podcast", 
".@kanyewest, we know how you've changed the game. go on @anotherround podcast", 
".@kanyewest, the white media doesn't get you. go talk to @heavenrants", 
".@kanyewest, @heavenrants doesn't think you're crazy", 
".@kanywest, read @hebenrants article, then go on her show @anotherround", 
".@akanyewest, go celebrate your 'anthology of arrogance' on @anotherround", 
"'I'm interested in how race affects the way ppl perceive and respond to his vanity.' @kanyewest talk 2 @heavenrants", 
"'He's of a long tradition of black artists for whom self-love is a political act.' @kanyewest, go on @anotherround", 
"'This is about boldly asserting yourself in a world that isn't meant for you'. @kanyewest, @anotherround is for you ", 
"'It’s so critical to think about why folks are calling him “crazy.”' @kanyewest, @heavenrants knows you're not", 
".@kanyewest, @anotherround knows you're worth understanding. Go talk to @heavenrants and @brokeymcpoverty", 
"'For black folks to love themselves is a political act.' @anotherround loves you, @kanyewest", 
".@kanyewest, @anotherround thinks your vanity is inspiring. be intentional about your interviews. Go on @anotherround", 
".@kanyewest, go talk about your incredible body of work on @anotherround", 
".@kanyewest, @heavenrants knows u 'changed the game for how black men are allowed to express their vulnerabilities'", 
".@kanyewest, @heavenrants knows you're not a crazy egomaniac. You're a dimensional human being! Go on @anotherround", 
"'You miss the moments when he so boldly asserts his anxieties, his humanity.' @kanyewest, be bold on @anotherround"
]; 

for (var i =0; i < campaignTweets.length; i++) {
    	console.log(campaignTweets[i], campaignTweets[i].length);
    };
var tips = campaignTweets[Math.floor(Math.random() * campaignTweets.length)];

// for (var i = 0; i < campaignTweets.length; i++){
// 	return campaignTweets[i];
// }

module.exports = tips;