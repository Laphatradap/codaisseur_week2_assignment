module.exports.groupAdultsByAgeRange = function(peopleList) {
  // 1. Exclude minors
  const peopleNoMinor = peopleList.filter(person => person.age >= 18)
  
  // 2. Group by age
  const grouping = {
    "20 and younger": [],
    "21-30": [],
    "31-40": [],
    "41-50": [],
    "51 and older": []
  }
  const groupedPeople = peopleNoMinor.reduce((acc, person) => {
    if(person.age <= 20) {
      acc["20 and younger"].push(person)
    } else if(person.age <= 30) {
      acc["21-30"].push(person)
    } else if(person.age <= 40) {
      acc["31-40"].push(person)
    } else if(person.age <= 50) {
      acc["41-50"].push(person)
    } else {
      acc["51 and older"].push(person)
    } 
    return acc
  }, grouping)
  
  // 3. Exclude empty age groups
  const result = Object.keys(groupedPeople)
    .filter(key => groupedPeople[key].length !== 0)
    .reduce((acc, current) => {
      acc[current] = groupedPeople[current]
      return acc
    }, {})

    return result

}