var num = 1;

function takeANumber(currentLine) {
    currentLine.push(num);
    return `Welcome, ${personName}. You are number ${currentLine.length} in line.`
    num = num + 1;
  
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"; 
  }
  
  else {
    return `Currently serving ${currentLine.shift()}.` ; 
  }
  
}


function currentLine(currentLine) { 
  var empty = []
  if (currentLine.length === 0) {
    return "The line is currently empty."; 
  }
  
  else {
    for(let i = 0; i<currentLine.length; i++ ) {
       
       empty.push(`${i+1}. ${currentLine[i]}`)
      
    /*   if (i === 0) {
         empty.push(`${i+1}. ${currentLine[i]}`)
      }
      else {
      
         empty.push(` ${i+1}. ${currentLine[i]}`)
      }
    }
    */
  }
  return "The line is currently: " + empty.join(" ")

}

