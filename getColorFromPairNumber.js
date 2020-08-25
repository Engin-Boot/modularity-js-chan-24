var majorColors=require('./majorColors.js');
var minorColors=require('./minorColors.js');

function getColorFromPairNumber(pairNumber) {
    let colorPair = {};
    const zeroBasedPairNumber = pairNumber - 1;
    const majorColorIndex =
        Math.floor(zeroBasedPairNumber / minorColors.length);
    colorPair.major = majorColors[majorColorIndex];
    colorPair.minor = minorColors[zeroBasedPairNumber % minorColors.length];
    return colorPair
}

module.exports=getColorFromPairNumber;
