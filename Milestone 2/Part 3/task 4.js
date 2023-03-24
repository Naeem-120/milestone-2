x = prompt("Enter first the number :");
y = prompt("Enter second the number :");
z = prompt("Enter third the number :");

if((x**2+y**2==z**2)|| (y**2+z**2==x**2)||(x**2+z**2==y**2))
{
    console.log(`${x},${y} and ${z} are Pythagorean triple`)
}
else
{
    console.log(`${x},${y} and ${z} are not Pythagorean triple`)
}