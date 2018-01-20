var chocolateBars = ['snickers', 'hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(one, two){
arraytwo = [two, ...one]
  return arraytwo;
}


function destructiveAddElementToBeginningOfArray(one, two){
 return one.unshift(two);
}