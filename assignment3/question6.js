const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below
if (parseFloat(disneyData.close) > parseFloat(disneyData.open)){
    if(parseFloat(disneyData.volume) > 100000){
        console.log("Strong Bullish");
    } else {
        console.log("Bullish")
    }
} else if (parseFloat(disneyData.close) < parseFloat(disneyData.open)) {
    if(parseFloat(disneyData.volume) > 10000){
        console.log("Strong Bearish");
    } else {
        console.log("Bearish")
    }
} else {
    console.log("neutral");
}