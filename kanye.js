var Twitter = require("twit");
var creds = require("./auth.json");
var troll = new Twitter(creds);

//happens 1st
console.log("bot is running");
var twitter_search_phrase = '#kanye OR #interview';
////////// BEGIN TEST //////////
// troll.post('statuses/update', { status: "I'm posting a tweet!" }, function(error, tweet, response) {
//   if(error) {
//     console.log("There was a problem tweeting the message.", error);
//   }
// });
////////// END TEST //////////

////////// INITIATE THE BOT //////////
function startBot(){
	troll.post('statuses/retweet/:id', { id: '241259202004267009' }, botInitiated);

	function botInitiated(error, tweet, response){ //happens 3rd
		if (error){
			console.log("Bot could not be initiated. ", error); 
		}
		else{
			console.log("Bot initiated: 241259202004267009");
		}
	}
	retweetBot();
};
	function retweetBot(){
		console.log("retweet something"); //happens 2nd before botInitiated()
		var query = {
			q: twitter_search_phrase,
			result_type: "recent"
		}

		troll.get("search/tweets", query, botGotLatestTweet);

		function botGotLatestTweet(error, data, response){
			if(error){
				console.log("Bot could not find latest tweet " + error );
			}
			else{
				var id = {
					id: data.statuses[0].id_str
				}
				troll.post('statuses/retweet/:id', id, botRetweeted);

				function botRetweeted(error, response){
					if(error){
						console.log('Bot could not retweet, ', error);
					}
					else{
						console.log("Bot retweeted "+ id.id);
					}
				}
			}
		}
	}



startBot();



//listen for tweets including the words "kanye" and "interview"


//retweet the original tweet & include "copy"
	//"copy" = "@kanyewest " + randomTip + " " + hebenQuote
	//"copy" = "@kanyewest" + randomTip + linkToHebenArticle 

//var TWITTER_SEARCH_PHRASE = '#technology OR #design';
