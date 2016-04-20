var Twitter = require("twit");
var creds = require("./auth.json");
var troll = new Twitter(creds);
var quotes = require("./quotes");
//happens 1st
console.log("bot is running");

//listen for tweets including the words "kanye" and "interview"
var twitter_search_phrase = '@kanyewest'; //change to 'kanye interview'

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

	troll.get("search/tweets", query, getLatestTweets);

	function getLatestTweets(error, data, response){
		if(error){
			console.log("Bot could not find latest tweet " + error );
		}
		else{
			console.log("DATA OBJECT!: ", data);
			var id = {
				id: data.statuses[0].text
			}
			//troll.post('statuses/retweet/:id', id, retweet);

			//use statuses/update THEN statuses/retweet/:id ???
				//text THEN permalink to the article THEN the OG tweet
				//append the link to the tweet that's quoted in the status
					// data.statuses[0]  quoted_status_id
					//as long as the link is the last part of the tweet, it'll be hidden on UI end
			troll.post("statuses/update", { status: "hey there! " + "https://twitter.com/twitter/status/" + id.id }, function(error, tweet, response){
				if(!error){
					//console.log("STATUS " + status);
					console.log("IT WORKS!");
					console.log("TWEET", tweet);
				}
			});

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



