let array=[];
  let input = prompt("Enter elements of the array separated by comma:");
  array = input.split(',');
  let x=array[0];
  for(i=1;i<array.length;i++)
  {
    if(x>array[i])
    {
        x=array[i];
    }
  }
  console.log(`The smallest number of array is ${x}`);

  x=array[0];
  for(i=1;i<array.length;i++)
  {
    if(x<array[i])
    {
        x=array[i];
    }
  }
  console.log(`The largest number of array is ${x}`);