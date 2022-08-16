// S(summary) - Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
// You can assume that num will be greater than 1. Use recursion.

// E(examples) -  Sum of all numbers to 10, starting at 1
//                 1+2+3+4+5+6+7+8+9+10=55 
//                 10+9+8+7+6+5+4+3+2+1=55
// A(approach) - Count from 1 to num and add each number to sum(variable) as it is counted. 

// T(test) - 




function sumNums(num) { 
    sum = 0;
    if (num <= 0) {        
      
        return sum
    }
        else  {
        console.log(num)
        sum+=num
        return sum+sumNums(num-1)
        }
    }
let test = sumNums(10);    
console.log(`The total of sumNums is ${test}`)
