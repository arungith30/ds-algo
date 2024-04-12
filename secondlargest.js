
let ar=[3,33,2,9,78,78,7,77,77,77,3]

let max=ar[0];
let secondM=ar[1];

if(ar.length<2)
{
	console.log(NA)

}
else{
	for (let ind =1;ind<ar.length;ind++)
	{
		if (max<ar[ind])
		{
			secondM=max;
			max=ar[ind];
		}
		if (max!=ar[ind]&&secondM<ar[ind])
		secondM=ar[ind]
	}
	console.log(max,secondM)
}