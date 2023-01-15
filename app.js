// let cash = 50
// let price = 40
// let storeIsOpen = true

// let decision = storeIsOpen && cash >= price ? 'give receipt' : 'do not give receipt'
// console.log(decision)



// let count = 1;

// while (count <= 100) {
//     console.log(count)
//     count = count + 1
    
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} -> Frontend Simplified`)
//     }
//     else if (i % 5 === 0) {
//         console.log(`${i} -> Simplified`)
//     }
//     else if (i % 3 === 0) {
//         console.log(`${i} -> Frontend`)
//     }
//     else {
//         console.log(`${i} -> ${i}`)
//     }
// }


// let str = 'Frontend Simplified'

// for (let i  = 0; i < str.length; i++) {
//     console.log(`'${str[i]}'`)
// }

// function convertCToF(celcius) {
//     let fehrenheit = celcius * 1.8 + 32
//     return fehrenheit
// }

// console.log(convertCToF(0));
// console.log(convertCToF(10));
// console.log(convertCToF(30));


// let grades = ['FAIL', 'FAIL', 'B']

// let passGrades = []

// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] !== 'FAIL') {
//         passGrades.push(grades[i])
//     }
// }

// console.log(passGrades)

/** long way of changing into cents
 * let dollars = [1, 5, 10, 3];
 * 
 * let cents = dollars.map((element) => {
 *     return element * 100
 * })
 * 
 * console.log(cents)
 */

/** shorter way to turn dollars into cents 
 * let dollars = [1, 5, 10, 3];
 * 
 * let cents = dollars.map(element => element * 100)
 * 
 * console.log(cents)
 */

/** turning dollars into cents without the map method
 * let dollars = [1, 5, 10, 3];
 * 
 * let cents = [];
 * 
 * for (i = 0; i < dollars.length; i++) {
 *     cents.push(dollars[i] * 100)
 * }
 * 
 * console.log(cents)
 * 
 */


/** users array
 * let users = [];
*/

/** login function
 * function login (email, password) {
 *     for (let i = 0; i < users.length; i++){
 *         if (users[i].email === email) {
 *             if (users[i].password === password) {
 *                 console.log('log the user in')
 *             } else {
 *                 console.log('inccorect passwoerd')
 *             }
 *             return;
 *         }
 *     }
 *     console.log("couldn't find a matching email")
 * }
*/

/** new accounts function
 * function newAccount (user) {
 *     users.push(user)
 * }
*/


/** creating new users
 * newAccount({
 *     username: 'Fatima', 
 *     email: 'iifatimams@gmail.com', 
 *     password: 'Fatima12345', 
 *     subscribtionStatus: 'Free', 
 *     discordId: 'Fatima#0001',
 *     lessonCompleted: []
 * });
 * 
 * newAccount({
 *     username: 'Futoon',
 *     email: 'futoonxfutoon@gmail.com',
 *     password: 'Ff11223300',
 *     subscribtionStatus: 'VIP',
 *     discordId: 'Futoon#0001',
 *     lessonCompleted: [0]
 * })
 * 
 * console.log(users)
*/


/** logging in new users
 * login('futoonxfutoon@gmail.com', 'Ff11223300')
 */

//First way of accessing an element
// console.log(document.querySelector('.title'));

//Second way of accessing an element
// console.log(document.getElementsByClassName('title'));

//Changing inner HTML using querySelector
// document.querySelector('.title').innerHTML = 'Frontend Simplified';

//Adding on innerHTML using querySelector
// document.querySelector('.title').innerHTML += ' Frontend Simplified'

//Changing CSS

// document.querySelector('.title').style.fontSize = '1em'

// a bottton function
// function changeTitleColorToRed () {
//     console.log('clicked');
//     document.querySelector('.title').style.color = 'Red'
// }

// Toggle Dark Mode
function toggle() {
    document.querySelector('body').classList.toggle('dark-theme')
}