var majorColors=require('./majorColors.js');
var minorColors=require('./minorColors.js');

function getPairNumberFromColors(majorColor, minorColor) {
    let majorIndex = 0;
    let minorIndex = 0;
    for(majorIndex = 0; majorIndex < majorColors.length; majorIndex++) {
        if(majorColors[majorIndex] == majorColor) {
            break;
        }
    }
    for(minorIndex = 0; minorIndex < minorColors.length; minorIndex++) {
        if(minorColors[minorIndex] == minorColor) {
            break;
        }
    }
    return majorIndex * minorColors.length + minorIndex + 1;
}

module.exports=getPairNumberFromColors;
