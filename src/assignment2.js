const groupAdultsByAgeRange = require("./transform").groupAdultsByAgeRange;



groupAdultsByAgeRange([
  { name: "Henry", age: 9 },
  { name: "Harry", age: 13 },
  { name: "John", age: 20 },
  { name: "Jasper", age: 31 },
  { name: "Emily", age: 32 },
  { name: "Hank", age: 60 }
]);



/* Should result in:
const result2 = {
  "31-40": [
    { name: "Anna", age: 31 },
    { name: "John", age: 32 }
  ],
  "51 and older": [{ name: "Hank", age: 60 }]
;*/