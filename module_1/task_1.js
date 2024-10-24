{
    const add = (value1, value2, base = 10) => {
        return parseInt(value1, base) + parseInt(value2, base);
    };
    console.log(add('5', '10')); //15
    console.log(add('1111', '1010', 2)); //25
    console.log(add('64', '12C', 16)); //400
    const subtract = (minuend, subtrahend, base = 10) => {
        return parseInt(minuend, base) - parseInt(subtrahend, base);
    };
    console.log(subtract('10', '5')); //5
    console.log(subtract('110010', '10100', 2)); //30
    console.log(subtract('64', '32', 16)); //50
    const multiply = (value1, value2, base = 10) => {
        return parseInt(value1, base) * parseInt(value2, base);
    };
    console.log(multiply('2', '2')); //4
    console.log(multiply('100', '1000', 2)); //32
    console.log(multiply('F', '4', 16)); //60
    const divide = (dividend, divider, base = 10) => {
        return parseInt(dividend, base) / parseInt(divider, base);
    };
    console.log(divide('6', '3')); //2
    console.log(divide('1100100', '11001', 2)); //4
    console.log(divide('19', '2', 16)); //12.5
    const raise = (value1, value2, base = 10) => {
        return Math.pow(parseInt(value1, base), parseInt(value2, base));
    };
    console.log(raise('2', '2')); //4
    console.log(raise('11', '11', 2)); //27
    console.log(raise('14', '2', 16)); //400
    const root = (value, base = 10) => {
        return Math.sqrt(parseInt(value, base));
    };
    console.log(root('25')); //5
    console.log(root('100000000', 2)); //16
    console.log(root('51', 16)); //9
}
