function isPrime(n) {
    if (n<=1) {
      return false;
    }
    for (let i=2;i<=Math.sqrt(n);i++)
    {
      if(n%i===0)
      {
        return false;
      }
    }
    
    return true;
  }
  x=parseInt(prompt("Enter a number to check whether the number is prime or not:"));
  if(isPrime(x)==true)
  {
    console.log(`${x} is a prime number.`);
  }
  else
  {
    console.log(`${x} is not a prime number.`);
  }
