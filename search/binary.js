function binarySearch(array,key,start,end)
{
    
     while(start<=end)
        {
        let mid = Math.floor((start + end) / 2);
        if(key===array[mid])
            return true;
        else if(key<array[mid])
            end =mid-1;
        else (key>array[mid])
        start=mid+1;
        }
      return false
    
}


let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (binarySearch(arr, x, 0, arr.length - 1)) {
	console.log("Element found!");
}
else {
	console.log("Element not found!");
}

x = 8;

if (binarySearch(arr, x, 0, arr.length - 1)) {
	console.log("Element found!");
}
else {
	console.log("Element not found!");
}
