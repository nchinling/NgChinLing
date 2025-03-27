const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

let sumClosingPrice = 0
for (let prices of msftData){
    sumClosingPrice += prices[3]
}

avgClosingPrice = (sumClosingPrice/msftData.length).toFixed(2);
console.log(`Average closing price of MSFT is ${avgClosingPrice}`);
