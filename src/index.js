module.exports = function toReadable (number) {
    const ones = [
        'zero', 'one', 'two', 'three', 'four', 
        'five', 'six', 'seven', 'eight', 'nine'
    ];
    
    const teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 
        'fourteen', 'fifteen', 'sixteen', 
        'seventeen', 'eighteen', 'nineteen'
    ];
    
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 
        'fifty', 'sixty', 'seventy', 'eighty', 
        'ninety'
    ];
    
    const hundreds = 'hundred';

    
    
    if (number < 10) {
        return ones[number];
    } 
    else if (number < 20) {
        return teens[number - 10];
    } 
    else if (number < 100) {
        const tenHalf = Math.floor(number / 10);
        const oneHalf = number % 10;               
        return oneHalf === 0 ? tens[tenHalf] : `${tens[tenHalf]} ${ones[oneHalf]}`;
    } 
    else {
        const hundredHalf = Math.floor(number / 100);
        const lastHalf = number % 100;               
        let result = `${ones[hundredHalf]}` + ' hundred';

        if (lastHalf > 0) {
            if (lastHalf < 10) {
                result = result + ` ${ones[lastHalf]}`;
            }
            else if (lastHalf < 20) {
                result = result + ` ${teens[lastHalf - 10]}`;
            } else {
                const tenHalf = Math.floor(lastHalf / 10);
                const oneHalf = lastHalf % 10;               
                result += oneHalf === 0 ? ` ${tens[tenHalf]}` : ` ${tens[tenHalf]} ${ones[oneHalf]}`;
            }
        }
        return result;
    } 
}
