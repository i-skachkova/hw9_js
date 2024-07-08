// 1
// const logItems = function(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(i+1 + " - " + array[i]);
//     }
// };

// const A = ['Mango', 'Poly', 'Ajax'];
// logItems(A);


// 2
// const calculateEngravingPrice = function(message, pricePerWord){
//     const B = message.split(" ");
//     return pricePerWord * B.length;
// };
// console.log(calculateEngravingPrice("I love cats", 5));

// 3
// const findLongestWord = function(string){
//     const B = string.split(" ");
//     let maxS = B[0];
//     for(let i = 1; i < B.length; i++){
//         if(maxS.length < B[i].length) maxS = B[i];
//     }
//     return maxS;
// };
// console.log(findLongestWord("I love you"));

// 4
// const formatString = function(string){
//     if(string.length <= 40) return string;
//     string = string.slice(0, 40);
//     return string + "...";
// };
// console.log(formatString("Тут буде менше 40 символів"));
// console.log(formatString("123456789012345678901234567890 в цьому рядку більше 40 символів"));

// 5
// const checkForSpam = function(message){
//     message = message.toLowerCase();
//     if(message.includes("spam") || message.includes("sale")) return true;
//     else return false;
// };
// if(checkForSpam("тут є спам hfeef e egfrf SpAm ihdi iehwf ewekfwfwfhb")){
//     console.log("Обережно, тут є спам!");
// }
// else console.log("Все добре, спаму нема");
// if(checkForSpam("weifon hiuekefm ferfe fref freio тут нема")){ 
//     console.log("Обережно, тут є спам!");
// }
// else console.log("Все добре, спаму нема");

// 6
// isNumber - ф-я для перевірки, чи є введений рядок числом. можна робити і без неї, але так як тема функції, я вирішила додати
// const isNumber = function(t){
//     t = Number(t);
//     if(Number.isNaN(t)){
//         alert('Було введено не число, попробуйте ще раз');
//         return false;
//     }
//     else return true;
// };
// let numbers = [];
// let total = 0;
// while(true){
//     let input = prompt("");
//     if(!input) break;
//     if(!isNumber(input)) continue;
//     numbers.push(Number(input));
// }
// for(let i = 0; i < numbers.length; i++){
//     total += numbers[i];
// }
// console.log('Загальна сума чисел дорівнює', total);

// 7
const isLoginValid = function(name){
    if(name.length >= 4 && name.length <= 16) return true;
    else return false;
};
const isLoginUnique = function(allLogins, name){
    if(allLogins.includes(name)) return false;
    else return true;
};
const addLogin = function(allLogins, name){
    if(isLoginValid(name) && isLoginUnique(allLogins, name)){
        alert('Логін успішно доданий!');
        allLogins.push(name);
    } 
    else{
        if(!isLoginValid(name)) alert('Помилка! Логін повинен бути від 4 до 16 символів');
        else alert('Такий логін уже використовується!');
    }
};
const logins = ["aaaa", "pelmen", "loginnn", "i_love_cats"];
// цикл нижче дозволяє вводити нові логіни поки не натиснути кнопку Cancel, як в попередньому завданні
while(true){
    const login = prompt("Введіть логін");
    if(!login) break;
    addLogin(logins, login);
}
console.log(logins);