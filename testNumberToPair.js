const expect = require('chai').expect;

var getColorFromPairNumber = require('./getColorFromPairNumber.js');

function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = getColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

module.exports=testNumberToPair;
