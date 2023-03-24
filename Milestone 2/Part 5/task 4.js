let array=[];
  let input = prompt("Enter elements of the array separated by comma:");
  array = input.split(',');
  even=[];
  for(i=0;i<array.length;i++)
  {
    if(array[i]%2==0)
    {
        even.push(array[i]);
    }
  }
  console.log(`New array with even numbers:${even}`);