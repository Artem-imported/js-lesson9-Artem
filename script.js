function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}
logItems(['Mango', 'Poly', 'Ajax']); 

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
}
console.log(calculateEngravingPrice("Hello world", 10));

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];
  
    for (const word of words) {
        if (word.length > longestWord.length) {
        longestWord = word;
        }
    }
  
    return longestWord;
}
console.log(findLongestWord("Бажано вибрати декілька слів, але я можу вибрати лише одне."));

function formatString(string) {
    return string.length > 40 ? string.slice(0, 40) + '...' : string;
}
console.log(formatString("Короткий текст."));
console.log(formatString("Це довгий текст який треба буде зрізати в кінці.")); 

function checkForSpam(message) {
    const CaseMessage = message.toLowerCase();
    return CaseMessage.includes('spam') || CaseMessage.includes('sale');
}

console.log(checkForSpam("This is a spam message"));
console.log(checkForSpam("Get your discount SALE now")); 
console.log(checkForSpam("Hello, how are you?")); 

  
let input;
const numbers = [];
let total = 0;
  
while (true) {
    input = prompt("Введіть число:");
    
    if (input === null) break;
  
    const number = Number(input);
  
    if (isNaN(number)) {
      alert("Було введено не число, попробуйте ще раз");
    } else {
      numbers.push(number);
    }
}
  
if (numbers.length > 0) {
    for (const num of numbers) {
      total += num;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
}
   