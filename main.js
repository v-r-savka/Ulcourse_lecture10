let myName = 'Vasyl';
let age = 24;
let answer = 'and, of course, i like learning Front End.'

let btn = document.getElementById('btn');

btn.onclick = function () {
   alert('I\'m ' + myName + ' ' + age + ' years old ' + answer);
}