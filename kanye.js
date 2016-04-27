var Twitter = require("twit");
var creds = require("./auth.json");
var troll = new Twitter(creds);
var tips = require("./justsayin.js");
var quotes = require("./quotes");
//happens 1st
console.log("bot is running");

//OPTION 1: (works well)
//listen for tweets including the words "kanye" and "interview"
var twitter_search_phrase = 'kanye interview'; //change to 'kanye interview'

//OPTION 2:
// filter the public stream by english tweets containing `#apple` 
// 
var stream = troll.stream('statuses/filter', { track: 'kanye interview', language: 'en' });


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
	trollKanye();
};

function trollKanye(){
	console.log("(re)tweet something"); //happens 2nd before botInitiated()
	var query = {
		q: twitter_search_phrase,
		result_type: "recent"
	}

	troll.get("search/tweets", query, getDemTweets);
	//stream.on('tweet', getDemTweets);

	function getDemTweets(error, data, response){
		if(error){
			console.log("Bot could not find latest tweet " + error );
		}
		else{
			console.log("DATA OBJECT!: ", data);
			var id = {
				id: data.statuses[0].id_str
			}
			//append the link to the tweet that's quoted in the status
			troll.post('statuses/retweet/:id', id, retweet);

	// function getDemTweets(error, data, response){
	// 	if(error){
	// 		console.log("Bot could not find latest tweet " + error );
	// 	}
	// 	else{
	// 		console.log("DATA OBJECT!: ", data);
	// 		var id = {
	// 			id: data.statuses[0].id_str
	// 		}
	// 			
	// 		troll.post("statuses/update", { status: campaignTweet + "https://twitter.com/twitter/status/" + id.id }, function(error, tweet, response){
	// 			if(!error){
	// 				console.log("IT WORKS!");
	// 				console.log("TWEET", tweet);
	// 			}
	// 		});
	// 	}
	// }

			function retweet(error, response){
				if(error){
					console.log('Bot could not retweet, ', error);
				}
				else{
					console.log("BOT RETWEETED " + id.id + " END CYCLE"); //id.id is a number
				}
			}
		}
	}

	/* Set an interval of 5 minutes (in microseconds) */
	setInterval(trollKanye, 1*60*1000);
};

startBot();



