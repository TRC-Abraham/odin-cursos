const sumAll = function(num1, num2) {
    let suma = 0;
    let n = 0;

    if ( num1 < 0 || num2 < 0 ) return 'ERROR';
    if ( !Number.isInteger(num1) || !Number.isInteger(num2) ) return 'ERROR';
    if (num1 < num2){
        while (num1 <= num2){
            num1++;
            n++;
            suma += n;
        }
        return suma;
    }else if (num1 > num2){
        while (num2 <= num1){
            num2++;
            n++;
            suma += n;
        }
        return suma;
    }   
};
// Do not edit below this line
module.exports = sumAll;
