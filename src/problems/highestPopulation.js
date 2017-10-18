/*
  Given a list of people with their birth years and death years,
  find the year with the highest population.

I: list of individuals and birth and death years
O: year with highest population
C: what does this list look like? what is the data structure? how are years represented?
    { person: [birth, death],
      person: [birth, death],
      person: [birth, death],
      person: [birth, death] }
E:

create list of years
iterate through list of people.
  for each birth year, increment that year and every subsequent year until death.
find highest year, and return

{ 1900, 1901, 1902, 1903, 1904, ..., 2017 }
*/

// TC: O(p*y + y)
function findHighestPopulation(list) {
  let popCounts = countPopulation(list);
  // return popCounts
  return getHighestPop(popCounts);
}

// TC: O(p*y)
function countPopulation(list) {
  let populationCounts = {};
  // let max = 0;

  for (let person in list) { // O(p) wrt people list
    let birthYear = list[person][0];
    let deathYear = list[person][1];
    for (let i = birthYear; i <= deathYear; i++) { // O(y) wrt yrs btw earliest birth, latest death
      populationCounts[i] ? ++populationCounts[birthYear] : 1;
      // max = populationCounts[i] > max ? populationCounts[i] : max;
    }
  }
  // return max
  return populationCounts;
}

// TC: O(y)
function getHighestPop(popCounts) {
  let max = 0;

  for (let year in popCounts) { // O(y) wrt years between earliest birth and latest death
    if (popCounts[year] > max) {
      max = popCounts[year];
    }
  }
  return max;
}

// O(p) wrt people list
function maxPop(people) {
  let popCounts = {};
  let max = 0;

  for (let year in people) {
    popCounts[year][0] = popCounts[year - 1][0] + people[year][0] - popCounts[year - 2][1];
    max = popCounts[year][0] > max ? popCounts[year][0] : max;
  }

  return max;
}
