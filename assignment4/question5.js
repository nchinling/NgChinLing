const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];


let averageClosePrice = 0;

function findAverageClosePrice(arr){
  let sumClosePrice = 0;
  let avgClosePrice = 0;
  for (let i = 0; i < disneyData.length; i++) {
    sumClosePrice += parseFloat(disneyData[i].close);
  }
  return avgClosePrice = (sumClosePrice/disneyData.length).toFixed(2);
  
}

const printStatement = (acp) => {
  console.log(`Average closing price of Disney is ${acp} `)
  
}

averageClosePrice = findAverageClosePrice(disneyData);
printStatement(findAverageClosePrice(disneyData));