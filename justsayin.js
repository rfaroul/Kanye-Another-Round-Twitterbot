//module.exports is an object so advice has to be an object or constructor?



var campaignTweets = [
".@kanyewest, @hebenrants doesn't think you're a punchline.", ".@hebenrants gets you, @kanyewest.", ".@kanyewest, @hebenrants appreciates your vanity.", ".@kanyewest, go boldly assert yourself on @anotherround.", ".@kanyewest, maybe you should interview with a Black journalist. go on @anotherround", ".@kanyewest, be like @prince: create opportunities for Black journalists. go on @anotherround", ".@kanyewest, we get you. go talk to @hebenrants on @anotherround podcast", ".@kanyewest, we know how you've changed the game. go on @anotherround podcast", ".@kanyewest, the white media doesn't get you. go talk to @hebenrants", ".@kanyewest, @hebenrants doesn't think you're crazy", ".@kanywest, read @hebenrants article, then go on her show @anotherround", ".@akanyewest, go celebrate your 'anthology of arrogance' on @anotherround"
]; //this is an object
var tips = campaignTweets[Math.floor(Math.random() * campaignTweets.length)];

// for (var i = 0; i < campaignTweets.length; i++){
// 	return campaignTweets[i];
// }

module.exports = tips;