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
m=array[0].length;
text=array[0];
for(i=1;i<array.length;i++)
{
  if(array[i].length>m)
  {
    m=array[i].length;
    text=array[i];
  }
}
console.log(`Longest string ${text}`);

m=array[0].length;
text=array[0];
for(i=1;i<array.length;i++)
{
  if(array[i].length<m)
  {
    m=array[i].length;
    text=array[i];
  }
}
console.log(`Shortest string ${text}`);