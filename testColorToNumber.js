const expect = require('chai').expect;

var getPairNumberFromColors = require('./getPairNumberFromColors.js');

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = getPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}

module.exports=testColorToNumber;
