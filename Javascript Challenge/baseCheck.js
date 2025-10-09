/*

Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

The string may contain integers, and uppercase or lowercase characters.
The check should be case-insensitive.
The base can be any number 2-36.
A number is valid if every character is a valid digit in the given base.
Example of valid digits for bases:
Base 2: 0-1
Base 8: 0-7
Base 10: 0-9
Base 16: 0-9 and A-F
Base 36: 0-9 and A-Z


Tests
Waiting:1. isValidNumber("10101", 2) should return true.
Waiting:2. isValidNumber("10201", 2) should return false.
Waiting:3. isValidNumber("76543210", 8) should return true.
Waiting:4. isValidNumber("9876543210", 8) should return false.
Waiting:5. isValidNumber("9876543210", 10) should return true.
Waiting:6. isValidNumber("ABC", 10) should return false.
Waiting:7. isValidNumber("ABC", 16) should return true.
Waiting:8. isValidNumber("Z", 36) should return true.
Waiting:9. isValidNumber("ABC", 20) should return true.
Waiting:10. isValidNumber("4B4BA9", 16) should return true.
Waiting:11. isValidNumber("5G3F8F", 16) should return false.
Waiting:12. isValidNumber("5G3F8F", 17) should return true.
Waiting:13. isValidNumber("abc", 10) should return false.
Waiting:14. isValidNumber("abc", 16) should return true.
Waiting:15. isValidNumber("AbC", 16) should return true.
Waiting:16. isValidNumber("z", 36) should return true.


*/


function isValidNumber(n, base) {

    let binary = "01";
    let octal = "01234567"
    let decimal = "0123456789"
    let hexadecimal = "0123456789abcdef"
    let hexatrigesimal = "0123456789abcdefghijklmnopqrstuvwxyz"

    let whichBase;

    let baseTrueOrFasle;

    // first check which base?

    if(base == 2){
        whichBase = binary;
    } else if (base == 8){
        whichBase = octal
    } else if (base == 10){
        whichBase = decimal 
    } else if (base == 16){
        whichBase = hexadecimal
    } else if(base == 36){
        whichBase = hexatrigesimal
    } else if(base > 16 && base<36) {
      whichBase = hexatrigesimal
      
    }


    for(let i=0; i<n.length; i++){
        if(whichBase.includes(n[i].toLowerCase())){

            baseTrueOrFasle = true;
        } else {
            baseTrueOrFasle = false;
            break;
        }
    }

  return baseTrueOrFasle;
}
