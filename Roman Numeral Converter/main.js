/*
Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    let result = '';
    const values = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    }
    if (num >= 1000) {
        let thousands = Math.floor(num / 1000);
        num -= thousands * 1000;
        result += values['1000'].repeat(thousands);
    }
    if(num >= 900 && num < 1000) {
        num -= 900;
        result += values['900'];
    }
    if (num >= 500 && num < 900) {
      num -= 500;
      result += values['500'];
    }
    if(num >= 400 && num < 500) {
      num -= 400;
      result += values['400'];
    }
    if (num >= 100 && num < 400) {
      let hundred = Math.floor(num / 100);
      num -= 100 * hundred;
      result += values['100'].repeat(hundred);
    }

    if(num >= 90 && num < 100) {
        num -= 90;
        result += values['90'];
    }
    if (num >= 50 && num < 90) {
      num -= 50;
      result += values['50'];
    }
    if (num >= 40 && num < 50){
      num -= 40;
      result += values['40'];
    }
    if(num >= 10 && num < 40) {
        let decimal = Math.floor(num / 10);
        num -= decimal * 10;
        result += values['10'].repeat(decimal);
    }
    if (num < 10) {
        if(num === 9) {
            num -= 9;
            result += values['9'];
        }
        if(num >= 5 && num < 9) {
            num -= 5;
            result += values['5'];
        }
        if(num === 4) {
            num -= 4;
            result += values['4'];
        }
        if(num >= 1 && num < 4) {
            let eq = Math.floor(num / 1);
            num -= eq;
            result += values['1'].repeat(eq);
        }
    }

    return result;
}
convertToRoman(36);
