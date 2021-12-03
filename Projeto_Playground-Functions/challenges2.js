// Desafio 10
function techList(tecnologias, name) {
  
  if(tecnologias.length === 0){
    return('Vazio!');
  }
  let arrayFora = [];
  let listaOrdenada = tecnologias.sort();
  let listaObjeto = {};

  for (let index =0; index< listaOrdenada.length; index +=1){
      listaObjeto.tech = listaOrdenada[index];
      listaObjeto.name = name;
      arrayFora.push(listaObjeto);
      listaObjeto = {}; //limpa a lista objeto para inserir o proximo listaOrdenada[index]
  }
  return arrayFora;

}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Gabriel'))

// Desafio 11
function generatePhoneNumber(array) {
  //Verifica se o array tem 11 elementos
  if (array.length !== 11){
  return('Array com tamanho incorreto.')
  } 
  let newArray = [];
  for (let index = 0; index<array.length; index +=1){
      if(array[index]<0 || array[index]>9){
        return('não é possível gerar um número de telefone com esses valores');
      }
      //For para comparar os elementos e verificar se eles se repetem
      let count = 0;
      for (let index2 = 0; index2<array.length; index2+=1){
        if(array[index2] === array[index]){
          count +=1
        }
  }   // Contagem para excluir o array que possuir mais de 3 numeros iguais dentro dele
      if (count>2){
        return('não é possível gerar um número de telefone com esses valores');
      }
      //reorganização do for para forma de array novamente
      newArray.push(array[index]);
  }
  //join para tranformar array para string
  let arrayToString = newArray.join('')
  return('('+arrayToString[0]+arrayToString[1]+ ') '+arrayToString[2]+arrayToString[3]+arrayToString[4]+arrayToString[5]+arrayToString[6]+'-'+arrayToString[7]+arrayToString[8]+arrayToString[9]+arrayToString[10]);

}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA<lineB+lineC && lineA>Math.abs(lineB-lineC)){
    return true;
  } else if(lineB<lineA+lineC && lineB>Math.abs(lineA-lineC)){
    return true;
}else if (lineC<lineA+lineB && lineC>Math.abs(lineA-lineB)){
  return true;
}
return false;
}

// Desafio 13
function hydrate(string) {
//.match retorna uma correspondência de uma string com uma expressão regular
// \d Encontra correspondência com um número. Equivalente a [0-9].
//  /g Realiza uma pesquisa global (encontrando todas as correspondências em vez de parar após a primeira combinação)

let numerosArray = string.match(/\d+/g);
let arrayToString = numerosArray.join('');
let sum=0;

for (let values of arrayToString){
  //parseInt - propriedade pesquisada para converter numeros na forma de string para numbers
  let stringToNumber = parseInt(values)

  if(stringToNumber>0 && stringToNumber <9){
    sum += stringToNumber;
  }
}
  if(sum === 1){
    return (sum+' copo de água');
  }
return (sum+' copos de água');
}
//console.log(hydrate('2 shots de tequila, 2 cervejas e 1 corote'));


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
