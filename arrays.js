var chocolateBars = ['snickers', 'hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(one, two){
arraytwo = [two, ...one]
  return arraytwo;
}


function destructiveAddElementToBeginningOfArray(one, two){
 one = one.unshift(two);
 return one;
}

function addElementToENDOfArray(one, two){
arraytwo = [...one,two]
  return arraytwo;
}



