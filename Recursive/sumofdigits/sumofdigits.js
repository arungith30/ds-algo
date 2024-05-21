function sumofDigits(num,l){
let temp=0;

for(let i=0; i<l;i++)
{   if (num < 10)
        { temp=temp+num }
    else
        {temp=num%10+temp;               
        num=Math.floor(num/10);}
}
console.log(temp)
}
sumofDigits(135,3)