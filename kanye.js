var Twitter = require("twitter");
var creds = require("./auth.json");
var troll = new Twitter(creds);

console.log("bot is running");

////////// BEGIN TEST //////////
// troll.post('statuses/update', { status: "I'm posting a tweet!" }, function(error, tweet, response) {
//   if(error) {
//     console.log("There was a problem tweeting the message.", error);
//   }
// });
////////// END TEST //////////

////////// INITIATE THE BOT //////////
function startBot(){
	// var params = {screen_name: '@ggx568'};
	// 	troll.get('statuses/user_timeline', params, function(error, tweets, response){
	// 		if (!error) {
	// 	  		console.log(tweets);
	// 		}
	// 		else{
	// 			console.log(error);
	// 		};
	// 	});
	troll.post('statuses/retweet/:id', { id: '241259202004267009' }, botInitiated);

	function botInitiated(error, tweet, response){
		if (error){
			console.log("Bot could not be initiated. ", error); //getting a 'code 34' error instead of 'already retweeted' error. WHY?!
		}
		else{
			console.log("Bot initiated: 241259202004267009");
		}
	}
};

	
startBot();



//listen for tweets including the words "kanye" and "interview"


//retweet the original tweet & include "copy"
	//"copy" = "@kanyewest " + randomTip + " " + hebenQuote
	//"copy" = "@kanyewest" + randomTip + linkToHebenArticle 

//var TWITTER_SEARCH_PHRASE = '#technology OR #design';
