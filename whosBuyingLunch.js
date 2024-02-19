function whosPaying(names) {
    // ARRAY OF NAMES
    names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

    // GET A RANDOM NUMBER
    toPay = Math.random();

    // GET THE NUMBER OF PEOPLE
    numberOfPeople = namesArray.length;

    // USE THE RANDOM NUMBER TO MULTIPLY THE NUMBER OF PEOPLE
    toPay = Math.floor(toPay * numberOfPeople);
    
    return console.log(names[toPay] + ' is going to buy lunch today!');

}

whosPaying();
