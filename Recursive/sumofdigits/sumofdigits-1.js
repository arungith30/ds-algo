function sumofDigits(num)
{
   return num.toString().split('').reduce((sum,element)=>
        sum+parseInt(element),0)
}

console.log(sumofDigits(123))