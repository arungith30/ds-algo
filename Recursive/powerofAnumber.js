function power(x,n){
{
if (n == 0)
        return 1;

if (x == 0)
        return 0;
else
return x*power(x,n-1);
}
    return temp
}
console.log(power(5,4))