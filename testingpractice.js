function capitalize(str){

  if(str.length > 0){
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
  return "";
}

function reverseString(str){
  if(str.length > 1){
    let res = "";
    for(let i = str.length; i--; i >= 0){
      res += str.charAt(i);
    }
    return res;
  }
  return str;
}

class Calculator{
  constructor(a,b){
    this.a = a;
    this.b = b;
  }
  add(){
    return this.a + this.b;
  }
  sub(){
    return this.a - this.b;
  }
  mul(){
    return this.a * this.b;
  }
  div(){
    if(this.b === 0){
      throw new Error('Cannot divided by 0');
    }
    return this.a / this.b;
  }
}

function caesarCipher(str,shift){
  if(str.length === 0){
    return str;
  }
  const lowerAlphabetMin = 97;
  const lowerAlphabetMax = 122;
  const upperAlphabetMin = 65;
  const upperAlphabetMax = 90;
  const alphabetLength = 26;
  let res = "";
  let charCode;
  for(let i = 0; i < str.length; i++){
    charCode = str.charCodeAt(i);
    if( charCode <= upperAlphabetMax && charCode >= upperAlphabetMin){
      charCode = ((charCode - upperAlphabetMin + shift) % alphabetLength) + upperAlphabetMin;  
    }else if( charCode <= lowerAlphabetMax && charCode >= lowerAlphabetMin ){
      charCode = ((charCode - lowerAlphabetMin + shift) % alphabetLength) + lowerAlphabetMin;
  }
  res += String.fromCharCode(charCode);
}
  return res;
}

function analyzeArray(arr){
  if(arr.length === 0){
    throw new Error("Need at least 1 element");
  }
  const length = arr.length;
  let min = Infinity;
  let max = -Infinity;
  
  let sum = 0;
  for(let i = 0; i < length; i++){
    sum += arr[i];
    if(arr[i] < min){
      min = arr[i];
    }
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return {
    average: sum / length,
    min,
    max,
    length
  }
}

export {capitalize, reverseString,Calculator, caesarCipher, analyzeArray};