function reversestr(string)
{
    let l= string.length;
    let a=string.split('');
    
    for (let i=0 , k=1; i<l/2;i++,k++)
    {   
    temp=a[i];
    a[i]=a[l-k];
    a[l-k]=temp;
    }
return a.join('');

}
console.log(reversestr("arunkumr"))