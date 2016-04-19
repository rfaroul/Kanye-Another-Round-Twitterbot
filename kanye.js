var Twitter = require("twitter");
var creds = require("./auth.json");
var troll = new Twitter(creds);

console.log("bot is running");

//listen for tweets including the words "kanye" and "interview"
//retweet the original tweet & include "copy"
	//"copy" = "@kanyewest " + randomTip + " " + hebenQuote
	//"copy" = "@kanyewest" + randomTip + linkToHebenArticle 

//var TWITTER_SEARCH_PHRASE = '#technology OR #design';


troll.post('statuses/update', { status: "I'm posting a tweet!" }, function(err, data, response) {
  if(err) {
    console.log("There was a problem tweeting the message.", err);
  }
});