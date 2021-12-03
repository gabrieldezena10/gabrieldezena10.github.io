// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } return false;
}
// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}
// console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(string) {
  let stringToArray = string.split(' ');
  return stringToArray;
}
// console.log(splitSentence('go Trybe go'));

// Desafio 4
function concatName(palavras) {
  let nomes = [palavras[0], palavras[palavras.length - 1]];
  let inversComma = nomes.reverse().join(', ');
  return inversComma;
}
// console.log(concatName(['Alex', 'Luana', 'Gabriel', 'Raquel', 'Eduardo']));

// Desafio 5
function footballPoints(wins, ties) {
  let score = wins * 3 + ties;
  return score;
}
// console.log(footballPoints(5, 1));

// Desafio 6
function highestCount(arrayNumber) {
  let maiorNum = arrayNumber[0];
  let contNum = 0;
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] > maiorNum) {
      maiorNum = arrayNumber[index];
    }
  }
  for (let index2 = 0; index2 < arrayNumber.length; index2 += 1) {
    if (arrayNumber[index2] === maiorNum) {
      contNum += 1;
    }
  }
  return contNum;
}

// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if  (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return ('os gatos trombam e o rato foge');
}
console.log(catAndMouse(0, 3, 2));
// Desafio 8
function fizzBuzz(array1) {
  let array2 = [];
  for (let values of array1) {
    if (values % 3 === 0 && values % 5 === 0) {
      array2.push('fizzBuzz');
    } else if (values % 3 === 0) {
      array2.push('fizz');
    } else if (values % 5 === 0) {
      array2.push('buzz');
    } else {
      array2.push('bug!');
    }
  }
  return (array2);
}

// Desafio 9
function encode(words) {
  let arrayNumberToVowels = [];
  for (let letter of words) {
    if (letter === 'a') {
      arrayNumberToVowels.push(1);
    } else if (letter === 'e') {
      arrayNumberToVowels.push(2);
    } else if (letter === 'i') {
      arrayNumberToVowels.push(3);
    } else if (letter === 'o') {
      arrayNumberToVowels.push(4);
    } else if (letter === 'u') {
      arrayNumberToVowels.push(5);
    } else {
      arrayNumberToVowels.push(letter);
    }
  }
  return arrayNumberToVowels.join('');
}

// console.log(encode('hi there!'));
function decode(words) {
  let arrayVowelsToNumbers = [];
  for (let number of words) {
    if (number === '1') {
      arrayVowelsToNumbers.push('a');
    } else if (number === '2') {
      arrayVowelsToNumbers.push('e');
    } else if (number === '3') {
      arrayVowelsToNumbers.push('i');
    } else if (number === '4') {
      arrayVowelsToNumbers.push('o');
    } else if (number === '5') {
      arrayVowelsToNumbers.push('u');
    } else {
      arrayVowelsToNumbers.push(number);
    }
  }
  return arrayVowelsToNumbers.join('');
}
// console.log(decode('h3 th2r2!'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
