function cal(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }

  return sum / numbers.length;
}

  let array=[];
  let input = prompt("Enter elements of the array separated by comma:");
  array = input.split(',');
  y=cal(array)
  console.log(`The average of array is ${y}`);