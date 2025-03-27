const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

function simpleMovingAverage(arr) {
    let total = 0;
    let sma = 0;
    
    for (let i=0; i < amdPrices.length; i++){
        total += amdPrices[i];
    }
    
    return sma = total / amdPrices.length;

}


const daysAbove7SMA = (sma) => {
    let count = 0;
    for (let i = 0; i < amdPrices.length; i++){
        if (amdPrices[i] > sma){
            count +=1;
        }
    }

    return count;
    
};

console.log(`Number of days AMD was above the 7-day SMA is: ${daysAbove7SMA(simpleMovingAverage(amdPrices))}`);

