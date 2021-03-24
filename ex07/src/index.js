const range = {
    max: 100.00,
    min: -25.00,
    num1: 17.50,
    num2: 88.80,
    average: 45.325
};
    // Only change code below this line 

    
    const middle = ({ max, min, num1, num2, average }) => {
        return (range.max + range.min) / 2.0;
    }
    // Only change code above this line


console.log(middle(range));
module.exports = middle;