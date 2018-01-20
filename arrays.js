var chocolateBars = ['snickers', 'hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(one, two){
 const array = [one]
 const arraytwo = [two, ...array]
  return arraytwo;
}


function destructiveAddElementToBeginningOfArray(one, two){
  arrayone = [one]
  arrayone.unshift(two)
  return arrayone;
}