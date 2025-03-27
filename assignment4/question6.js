// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

function returnThreeLowest(stockPriceArray) {
    let lowestPrices = [Infinity, Infinity, Infinity]; 
    for (let price of stockPriceArray) {
        if (price < lowestPrices[2]) { // Check if the price is lower than the 3rd lowest
            lowestPrices[2] = price;
            lowestPrices.sort((a, b) => a - b); // sort the 3 values
        }
    }
    return lowestPrices;
  }
  
  
  const printStatement = (arr) => {
     console.log(`The three lowest prices are ${arr[0]}, ${arr[1]} and ${arr[2]}`)
    
  }
  
  const threeLowest = returnThreeLowest(amdPrices);
  printStatement(threeLowest);
  