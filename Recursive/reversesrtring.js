function strReverse(str) {
    if (str === "") {
        return "";
    } else {
        return strReverse(str.substr(1)) + str.charAt(0);
    }
}
console.log(strReverse("arunkumar"));