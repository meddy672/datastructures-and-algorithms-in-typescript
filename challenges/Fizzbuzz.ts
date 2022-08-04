/**
 * - If the number is divisible by 3 log fizz instead of the number
 * - If the number is divisible by 5 log out buzz instead of that number
 * - If the number is dvisible by three and 5 log out fizzbuzz instead of that number
 * - If the number is not divisble by 3 o 5 just log out the number
 */
enum Remainder { ZERO = 0 }

interface IFizzBuzz {
     num: number;
     divisor1: number;
     divisor2: number;
     context: {
          fizz: string;
          buzz: string;
          fizzbuzz: string;
     }
}

fizzBuzz({
     num: 20,
     divisor1: 3,
     divisor2: 6,
     context: {
          fizz: 'fizz',
          buzz: 'buzz',
          fizzbuzz: 'fizzbuzz'
     }
});


/**
 * @description outputs the results of the configuration
 * @param {IFizzBuzz} -  Object for configuring fizzBuzz function
 */
function fizzBuzz({ num, divisor1, divisor2, context }: IFizzBuzz): void {
     if (isNotZero(divisor1, divisor2)) {

          if (num === 0) {
               return;
          } else {
               if ((num % divisor1) === Remainder.ZERO 
                    && (num % divisor2) === Remainder.ZERO) console.log(context.fizzbuzz);
               else if ((num % divisor1) === Remainder.ZERO) console.log(context.fizz);
               else if ((num % divisor2) === Remainder.ZERO) console.log(context.buzz);
               else console.log(num);
               num--;
               fizzBuzz({
                    num,
                    divisor1,
                    divisor2,
                    context
               });
          }
     } else console.log(`Divisors:(${divisor1}, ${divisor2}) cannot have a zero value.`)
}

/**
 * @param {number} divisor1 - divisior to determine fizz
 * @param {number} divisor2 - divisor to determine buzz
 * @returns {Boolean}
 */
function isNotZero(divisor1: number, divisor2: number): boolean {
     return divisor1 !== 0 && divisor2 !== 0;
}
