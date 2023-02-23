/*
Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN:

имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN
*/


const extractNumber = (string) =>{
let result = '';
for (let i = 0; i < string.length; i++){
    if(!Number.isNaN(parseInt(string.at(i), 10))){
  result += string.at(i);
    }
}
return parseInt(result, 10);
}

extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');
