/* Encuentra el máximo */

export function maxOfTwoNumbers(num1, num2){
//if(num1 > num2){
    
 //   return num1;
//}
//else if(num1 < num2){
//    return num2;
//}
//if(num1 < num2) {
//    return num2;
//} else{
//    return num1 = num2;
//}
return Math.max(num1,num2)
// // }
// // export function findLongestWord(words){
// //     let longestWord = "";
// //     words.forEach(function(word){
// //         if(word.length>longestWord.length)
// //         longestWord = word;
// //     })
//     if(words.length ==0){return undefined;
//     }
//     for(let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
// }
// if(words.length ==0){
//     return undefined;
// }
// return longestWord;
// }

}
export function findLongestWord (words){
    let longestword = "";
    for(let i=0;i<words.length;i++){
        if (words[i].length>longestword.length){
            longestword = words[i];
        }

    }
//    words map(function(word){
//        if(word·length>longestword.length){
//            longestword = word
//        }
//    })
    if(words.length==0){
        return undefined;
    }
    return longestword;
}
    //woerd.sort();
    //return words[6];
    //return words [0];
//    return longestword
//}
//export function findLongestword (words){
//    let result = words.sort((a,b)=>
//    b.length - a.length)
//}
export function findLongestWord(words){
//    if(words.length) return undefined;
//    return words.reduce((acumulador, elemento)=>{
        //acumulador="";
//    if(elemento.length>acumulador.lenght){
//        acumulador =elemento;
//    }
//    return acumulador;
//},"")
//}
export function sumArray(array) {
    return array.reduce((ac,el)=> ac+el,0);
}
//export function sumArray(array){
  //  return array.length? eval(array.join("+")):0
//let addition = 0;
//for(let i =0; i>array.length; i++){
//    addition = array[i] +addition;
//}
//return addition;
//}
export function averageNumbers(list){
    if(!list.length) return undefined
    return sumArray(list)/list.length
}
export function averageWordLength(array){
    if(!array.length) return undefined 
    console.log(array.join(""));
    return array.join("").length/array.length
}
   // return array.reduce((ac,el,i,a)=> ac+el/a.length,0);
    //sumar todos los caracteres y dividir por el numero de palabras, busca la media de los caracteres.
   // array.map((element)=>{
     //   element.length
    //})

export function uniquifyArray(words){
    let newArray = [];
    //for(let i = 0; i<words.length; i ++){
    //    newArray.push(words[i]);
    words.forEach((elemento))
newArray.push
//de abajo significa if(words.length){
    return newArray
} else {
    return undefines
}
return !words.length? newArray : undefined;}

    //};
//const deleterep = (array)=>{
//    return [...new set(array)]
//}
//return (deleteRep(words));
//}
export function doesWordExist(){}
export function howManyTimes(){}
export function greatestProduct(){}





0                                                                                                                                                                         