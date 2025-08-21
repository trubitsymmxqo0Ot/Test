const square = (value) => {
    if(value === 1) {
        return 1;
    }
     return Math.pow(value, 2);
}

module.exports = square;