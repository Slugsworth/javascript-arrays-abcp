var chocolateBars = ['snickers', 'hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(one, two){
arraytwo = [two, ...one]
  return arraytwo;
}


function destructivlyAddElementToBeginningOfArray(one, two){
 one.unshift(two)
 return one;
}

function addElementToEndOfArray(one, two){
arraytwo = [...one,two]
  return arraytwo;
}

function destructiveAddElementToEndOfArray(one, two){
 one.push(two)
 return one;
}

