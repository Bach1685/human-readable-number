module.exports = function toReadable (number) {

    let _number = number;
    if(_number == 0){
        return digits[0];
    }

    let response = [];
    let coeff = 1000000000;

    for(let i = 0; i < words.length - 1; i++){
        let currentNumber = Math.trunc(_number / coeff);
        let currentString = convertToWord1to999(currentNumber);

        if(currentNumber > 0){
            response.push(currentString + " " + words[i]);
        }

        _number = _number - currentNumber * coeff;

        if(_number < 1000){
            currentString = convertToWord1to999(_number);
            response.push(currentString);
            return response.join(' ');
        }

        coeff = coeff / 1000;
    }

   return response.join(' ');
}

let digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
];

let words = [
    'billion',
    'millon',
    'thousand',
    'hundred'
]

function convertToWord1to999(numberFrom1to999){

    let _numberFrom1to999 = numberFrom1to999;
    let response = [];

    let hundred = Math.trunc(_numberFrom1to999 / 100);

    if(hundred > 0){
        response.push(digits[hundred] + " " + words[3]);
    }

    let ten = _numberFrom1to999 - hundred * 100;

    if(ten > 0 && ten < 20){
        response.push(digits[ten]);
    } else if(ten != 0) {
        let tenCount = Math.trunc(ten / 10);
        response.push(digits[(19 - 1) + tenCount]);
        let digit = ten - tenCount * 10;

        if(digit > 0){
            response.push(digits[digit]);
        }
    }

    return response.join(' ');
}
