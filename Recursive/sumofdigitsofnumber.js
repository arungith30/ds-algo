function sumofDigits (num)
{
    if (num<10)
        return num
    else
    {let temp = num%10;
    return temp+sumofDigits ((num-temp)/10)
    }
}
console.log(sumofDigits(123456789))