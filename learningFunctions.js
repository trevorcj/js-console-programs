function getMilk(money, costPerBottle) {
    console.log('leaveHouse');
    console.log('enterStore');

    // BOTTLES OF MILK TO BUY
    console.log('buy ' + calcBottles(money, costPerBottle) +' bottles of Milk');
    console.log('enterHouse');    

    // CHANGE TO RETURN
    return calcChange(money, costPerBottle); // REMAINDER OF THIS DIVISION
}

// FUNCTION THAT CALCULATES HOW MANY BOTTLES OF MILK TO BUY
function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);

    return numberOfBottles;
}

// FUNCTION THAT CALCULATES HOW MUCH CHANGE WE HAVE
function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;

    return change;
}

console.log('Change is ' + '$' + getMilk(4, 1.5));
