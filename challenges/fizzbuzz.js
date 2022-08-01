/**
 * - If the number is divisible by 3 log fizz instead of the number
 * - If the number is divisible by 5 log out buzz instead of that number
 * - If the number is dvisible by three and 5 log out fizzbuzz instead of that number
 * - If the number is not divisble by 3 o 5 just log out the number
 */

function fizzBuzz(num) {

   if (num === 0) {
        return;
   } else {
        if ((num % 3) === 0 && (num % 5) === 0) console.log('fizzbuzz');
        else if ((num % 3) === 0) console.log('fizz');
        else if ((num % 5) === 0) console.log('buzz');
        else console.log(num);
        num--;
        fizzBuzz(num);
   }
}

fizzBuzz(20);