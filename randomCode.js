//1. Initialize the bot. should get an error that "you've already retweeted this tweet"
// var tweetId = "719960960404992005";
// function botInit(){
// 	client.post("statuses/retweet/" + tweetId, botInitiated);
// 	function botInitiated(error, data, response){
// 		if (error) {
// 			console.log('Bot could not be initiated. Error : ', error); //runs after the botRetweet function runs
// 		}
// 		else {
//   			console.log('Bot initiated: ' + tweetId);
// 		}
// 	}
// 	getFollowers();
// };

// function botRetweet(){ //runs before botInitiated runs; see this before the error
// 	console.log("retweet the bot");
// };

//how to retweet the tweet from the user once it's been converted
	//instead of console.log, want to post

// botInit();

//for kanye bot would change follow to track: 'keyword' and statuses to "users/search" to look for kanye activity