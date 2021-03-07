module.exports = function toReadable (number) {
  let arr = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let array = ['null', 'ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let str;
  let numToArray = (number + '').split('');



  let ifNumLessTwenty= function (number) {
    return arr[number];
  }

  let ifNumLessHundred = function (number){ 
     let str = '';
     if (numToArray[1] === '0') {
        str = `${array[numToArray[0]]}`;
     } else {
        str = `${array[numToArray[0]]}` + ' ' + `${arr[numToArray[1]]}`;
     }
    return str
}

let ifNumLessThousand = function (number) {
let str = '';

      if (numToArray[1] === '0' && numToArray[2] === '0') {
        str = `${arr[numToArray[0]]}` + ' hundred'; 
      } else if (+(numToArray[1] + numToArray[2]) < 20) {
        str = `${arr[numToArray[0]]}` + ' hundred' + ' ' +  ifNumLessTwenty(+(numToArray[1] + numToArray[2]));
      } else if (numToArray[1] === '0'){
        str = `${arr[numToArray[0]]}` + ' hundred ' + `${arr[numToArray[2]]}`; 
      } else if (numToArray[2] === '0') {
        str = `${arr[numToArray[0]]}` + ' hundred ' + `${array[numToArray[1]]}`;
      } else {
        str = `${arr[numToArray[0]]}` + ' hundred ' + `${array[numToArray[1]]}` + ' ' + `${arr[numToArray[2]]}`;
      }
      return str
  }
  

if (number < 20){
    str = ifNumLessTwenty(number);
} else if (number < 100) {
    str = ifNumLessHundred(number);
} else if (number < 1000){
    str = ifNumLessThousand(number);
}

  return str;
}
