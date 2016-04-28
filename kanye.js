var Twitter = require("twit");
var creds = require("./auth.json");
var troll = new Twitter(creds);
var tips = require("./justsayin.js");
var quotes = require("./quotes");
//happens 1st
console.log("bot is running");

//listen for tweets including the words "kanye" and "interview"
var twitter_search_phrase = 'kanye interview';


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
	};

	trollKanye();
};

function trollKanye(){
	console.log("(re)tweet something"); //happens 2nd before botInitiated()

	var query = {
		q: twitter_search_phrase,
		result_type: "recent"
	}

	troll.get("search/tweets", query, getDemTweets);
	
	function getDemTweets(error, data, response){ //HAPPENS 3rd after botInitiated
		if(error){
			console.log("Bot could not find latest tweet " + error );
		}
		else{
			var id = {
				id: data.statuses[0].id_str
			}
			console.log("DATA OBJECT!: ", id.id);

			console.log("tips ", tips);
			//append the link to the tweet that's quoted in the status
			troll.post('statuses/update', { status: tips[0] + " https://twitter.com/twitter/status/" + id.id }, retweet);

			function retweet(error, tweet, response){
  				if(!error){
  					console.log("IT WORKS!");
  					console.log("TWEET", tweet);
  				}
  			}
		}
	}


	/* Set an interval of 5 minutes (in microseconds) */
	setInterval(trollKanye, 5*60*1000);
}

/* Initiate KanyeBot */

startBot();



