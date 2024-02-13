// VAR THAT STORES USER NAME COLLECTED VIA PROMPT
var name = prompt('What\'s your name?');

// ISOLATE THE FIRST CHARACTER
var firstChar = name.slice(0,1);

// TURN THE FIRST CHARACTER TO toUpperCase
firstChar = firstChar.toUpperCase();

// EXCLUDE THE FORMER FIRST CHARACTER
name = name.slice(1,name.length);

// UPDATE THE NAME VARIABLE
name = firstChar + name.toLowerCase();

// PRINT RESULT
alert('Hello ' + name);
