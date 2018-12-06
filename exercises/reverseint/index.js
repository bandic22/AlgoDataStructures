// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var numStr = n.toString();
    var reversed = "";
    var isNeg = false;

    if (Math.sign(n) == -1) {
        isNeg = true;
        numStr.split('-');
    }

    for (var i = numStr.length - 1; i >= 0; i--) {
        if (numStr[i] == "0" && numStr[i+1] == "") {
            numStr[i] = "";
        }

        reversed += numStr[i];
    }

    if (isNeg) {
        reversed = "-" + reversed;
    }

    return reversed = parseInt(reversed);
}

module.exports = reverseInt;
