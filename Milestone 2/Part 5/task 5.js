array=[];
console.log("Enter input string(if you want to stop taking input then type stop):");
while(1)
{
    x=prompt();
    if(x=="stop")
    {
        break;
    }
    array.push(x);
}
console.log(`${array}`);
upper=[];
for(i=0;i<array.length;i++)
{
    upper.push(array[i].toUpperCase());
}
console.log(`${upper}`);