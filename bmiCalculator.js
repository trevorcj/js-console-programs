function bmiCalculator(weight, height) {

    console.log('Your weight is ' + weight + 'kg');
    console.log('Your height is ' + heightSquare(height) + 'm2');

    var bmi = roundBMI(bmiMath(weight, heightSquare(height)));

    return bmi;
}

// FUNCTION THAT SQUARES THE HEIGHT
function heightSquare(squareHeightValue) {
    var finalHeight = squareHeightValue;
    finalHeight = finalHeight ** 2;

    return finalHeight;
}

// FUNCTION THAT CALCULATES THE BMI
function bmiMath(userWeight, userHeight) {
    var calculator = userWeight / userHeight;

    return calculator;
}

// FUNCTIONS THAT ROUNDS THE VALUE OF THE BMI
function roundBMI(finalBMI) {
    finalBMI = Math.round(finalBMI, 2);

    return finalBMI;
}

console.log('Your BMI is ' + bmiCalculator(65, 1.8) + 'kg/m2');
