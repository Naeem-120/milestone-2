function cal(array) { 
    let sum = 0;
    for (let i = 0;i<array.length; i++) {
      let x=parseInt(array[i]);
      sum +=x;
    } 
    return sum;
  }
  let array=[];
  let input = prompt("Enter elements of the array separated by comma:");
  array = input.split(',');
  console.log(`sum of array:${cal(array)}`)