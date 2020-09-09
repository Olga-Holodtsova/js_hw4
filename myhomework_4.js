/**
 * fruits arr is a store of fruits, fill as you wish
 * Example
 * ['banana', 'orange', 'orange']
 */
const fruits = ['apple', 'pear', 'orange', 'banana', 'pineapple', 'grapes', 'pomegranate', 'kiwi',];


/**
 * fruitsBought arr is a store of bought fruits
 * push fruit here after buying
 */

const fruitsBought = ['apple', 'pear', 'orange', 'banana', 'pineapple', 'grapes', 'pomegranate', 'kiwi',];


/**
 * logs array is used to store logs on the page.
 * Can be filled with executing log function
 * 
 * Example:
 * log(customerName, fruitName, success)
 * where
 * - customerName is name of customer
 * - fruitName is name of fruit
 * - success is state if customer bought a fruit
 */

const logs = []; 

/**
 * Example of customer
 */

const customers = [{
    name: 'Ivan',
    balance: 46,
    fruitsToBuy: [{
        name: 'banana',
        count: 4,
    }]}, {
    name: 'Pavel',
    balance: 100,
    fruitsToBuy: [{
        name: 'kiwi',
        count: 5,
    }]}, {
    name: 'Alex',
    balance: 120,
    fruitsToBuy: [{
        name: 'grapes',
        count: 5,
    }]}, {
    name: 'Dima',
    balance: 72,
    fruitsToBuy: [{
        name: 'orange',
        count: 5,
    }]}, {
    name: 'Vitaliy',
    balance: 80,
    fruitsToBuy: [{
        name: 'pear',
        count: 5,
    }]}, {
    name: 'Vladislav',
    balance: 300,
    fruitsToBuy: [{
        name: 'apple',
        count: 8,
    }]}, {
    name: 'Oleg',
    balance: 170,
    fruitsToBuy: [{
        name: 'pineapple',
        count: 10,
    }]}, {
    name: 'Evgeniy',
    balance: 52,
    fruitsToBuy: [{
        name: 'pomegranate',
        count: 12,
    }]}
]; 

/**
 * Function buyFruits is used to iterate over array passes as a param
 * if customer wants to buy 4 banana try to remove banana from fruits array (find it above)
 * and push it to fruitsBought array (find it above)
 * 
 * Push execution result in log
 * function log is written below, you'll find execution example on line 18 of this file
 * 
 * Example:
 * buyFruits(customers)
 * 
 * 
* Функция buyFruits используется для перебора передач массива в качестве параметра
 * если клиент хочет купить 4 банана, попробуйте удалить банан из массива фруктов (см. выше)
 * и протолкнуть его в массив fruitBought (найти выше)
 *
 * Пуш результат выполнения в журнал
 * журнал функций записан ниже, вы найдете пример выполнения в строке 18 этого файла
 *
 * Пример:
 * buyFruits (клиенты)
 */
function buyFruits(customersArr) {
    // write code here
  
}


/**
 * Function getFruitsMap returns map of fruits
 * Example:
 * 
 * const fr = ['banana', 'orange', 'orange']
 * getFruitsMap(fr); -> { banana: 1, orange: 2 }
 * 
 */
 function getFruitsMap(fruitsArr) {
    // write code here
   
    
};
  
 
// DONT'T EDIT FOLLOWING CODE
buyFruits();
const fruitsLeftMap = getFruitsMap(fruits);
const fruitsBoughtMap = getFruitsMap(fruitsBought);


function log (customerName, fruitName, success) {
    const action = success ? 'bought' : 'faliled to buy';
    const className = success ? 'green' : 'red'
    logs.push(`${customerName} <span class=${className}>${action}</span> ${fruitName}`);
}

function render () {
    renderLog();
    renderFruits('fruits-left', fruitsLeftMap);
    renderFruits('fruits-bought', fruitsBoughtMap);

    function renderLog() {
        let existingLogsContainer = document.getElementById('messages');
        let mainLogsContainer =  document.getElementById('log');
        
        if (existingLogsContainer) {
            mainLogsContainer.removeChild(existingLogsContainer);
        }
        
        const logsContainer = document.createElement('ul');
        logsContainer.id = 'messages';
        
        logs.forEach(log => {
            const logEl = document.createElement('li');
            logEl.innerHTML = log;
            logsContainer.appendChild(logEl);
        });
        
        mainLogsContainer.appendChild(logsContainer);    
    }
    
    function renderFruits (id, mappedData) {
        const mainFruitsContainer = document.getElementsByClassName(id)[0];
        const existingFruitsBoughtContainer = (mainFruitsContainer.getElementsByClassName('fruits-list') || [])[0];
        
        if (existingFruitsBoughtContainer) {
            mainFruitsContainer.removeChild(existingFruitsBoughtContainer);
        }
        
        const fruitsContainer = document.createElement('ul');
        fruitsContainer.classList.add('fruits-list');
        
        for (let key in mappedData) {
            const fruitEl = document.createElement('li');
            const nameEl = document.createElement('span');
            const countEl = document.createElement('span');
            nameEl.innerText = `${key}:`;
            countEl.innerText = mappedData[key];
        
            fruitEl.appendChild(nameEl);
            fruitEl.appendChild(countEl);
            fruitsContainer.appendChild(fruitEl);
        }
        
        mainFruitsContainer.appendChild(fruitsContainer);
    }
}
