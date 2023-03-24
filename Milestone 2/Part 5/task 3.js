const people = [
    { name: 'Naeem', age: 28 },
    { name: 'Rony', age: 35 },
    { name: 'mehedi', age: 42 },
    { name: 'hridoy', age: 25 },
    { name: 'shanto', age: 50 }
  ];
  old=people[0];
  for(i=1;i<people.length;i++)
  {
    if(people[i].age>old.age)
    {
        old=people[i];
    }
  }
  console.log(`The oldest person is ${old.name}`);

  