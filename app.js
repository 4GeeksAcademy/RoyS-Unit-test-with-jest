let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
 const fromYenToPound = function(valueInYen) {

    let valueInEuro = valueInYen / 156.5;

    let valueInPound = valueInEuro * .87;

    return valueInPound;
 }

    const fromDollarToYen = function(valueInDollar) {

        let valueInEuro = valueInDollar / 1.07

        let valueInYen = valueInEuro * 156.5

        return valueInYen;
    }
module.exports = { fromEuroToDollar, fromYenToPound, fromDollarToYen };