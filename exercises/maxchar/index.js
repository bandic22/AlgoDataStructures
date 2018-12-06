// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var maxVal = "";
    var max = 0;
    var charMap = {};

    for (var i = 0; i < str.length; i++) {
        if (!charMap[str[i]]) {
            charMap[str[i]] = 1;
        }
        else {
            charMap[str[i]]++;
        }

        if (charMap[str[i]] > max) {
            max = charMap[str[i]];
            maxVal = str[i];
        }
    }

    return maxVal.toString();
}

module.exports = maxChar;
