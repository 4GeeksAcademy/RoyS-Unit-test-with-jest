
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar, fromDollarToYen } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One Yen should be 0.00556 Pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const Pounds = fromYenToPound(1);

    const expected = (1/156.5) * .87;
    
     expect(Pounds).toBe(expected); 
})

test("One Dollar should be 146.261 in Yen", function() {
    const { fromDollarToYen } = require('./app.js');

    const Yen = fromDollarToYen(1);

    const expected = (1/1.07) * 156.5; 
    
     expect(Yen).toBeCloseTo(expected);
})
