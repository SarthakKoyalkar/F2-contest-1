const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for( i in data)
  {
    
    console.log(data[i]);
  }
  
}

// 2. Add Data
function addData() {
  

}

// 3. Remove Admins
function removeAdmin() {
  
  for (i in data)
  {
    if(data[i].profession == "admin")
    {
      delete data[i];
    }
  }
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  const data2 =[{name: "sarthak", age: 22, profession: "Jdeveloper" },
  {name: "vaibhav", age: 22,profession: "Javadeveloper" }]

  let concatenatedArray = data.concat(data2);
  console.log(concatenatedArray);
}

// 5. Average Age
function averageAge() {
  let sum=0;
  for (i in data)
  {
    sum = data[i].age + sum;
  }
  console.log(sum/data.length) ;
}

// 6. Age Check
function checkAgeAbove25() {
  for(i in data)
  {
    if(data[i].age>25)
    {
      console.log("yes a person with age more than 25 is present.")
    }
    else
    console.log("no person with age above 25");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let array1 = [];
  for ( i in data)
  {
    array1.push(data[i].profession);
  }
  let outputArray = array1.filter(function (v, i, self) {
 
    // It returns the index of the first
    // instance of each value
    return i == self.indexOf(v);
});
    console.log(outputArray);
}

// 8. Sort by Age
function sortByAge() {
  
}

// 9. Update Profession
function updateJohnsProfession() {
  for(i in data)
  {
    if(data[i].name == "john")
    {
      data[i].profession = "manager";
    }
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let array1 = [];
  for ( i in data)
  {
    array1.push(data[i].profession);
  }
  let outputArray = array1.filter(function (v, i, self) {
 
    // It returns the index of the first
    // instance of each value
    return i == self.indexOf(v);
});
console.log(outputArray.length);
}
