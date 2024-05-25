let Ar=Array.from({length:20},()=>parseInt(Math.random()*10))

let unique =[];


for(let i=0;i<Ar.length;i++)
    {let count=0;
        for(let j=0; j<i; j++)
        {
        if(Ar[j]==Ar[i])
        count++
        }
        if (count===0){
            unique[unique.length] = Ar[i];
    }
    }
console.log(Ar)
console.log(unique)