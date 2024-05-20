ar =[5,6,7,8,9,10];
let sum =0;

for(let i=ar.length-1; i>=0;i--)
    {
        sum =sum +ar[i];
        ar[i]=sum-ar[i];
    }
console.log(ar)