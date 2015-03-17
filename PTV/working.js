
alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie']
["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
alamein
["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
alamein.indexOf('Richmond')
1
alamein.indexOf('Burnley')
3
alamein.indexOf('Glenferrie')-alamein.indexOf
NaN
var partOne = alamein.indexOf('Glenferrie')-alamein.indexOf('Richmond')
undefined
partOne
4
var partOne = alamein.indexOf('Richmond')-alamein.indexOf('Glenferrie')
undefined
partOne
-4
Math.abs(partOne)
4

// useing parseInt
// '1+2+3
// VM524:2 Uncaught SyntaxError: Unexpected token ILLEGAL
// '1'+2+3
// "123"
// var number = '1'+2+3
// undefined
// number
// "123"
// parseInt(number)
// 123


["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
depLine.indexOf(depStation)
-1
alamein.indexOf(depStation)
5
var clean = parseInt(depLine)
undefined
clean
NaN
alamein.indexOf(depStation)
5
depLine.indexOf(depStation)
-1
alamein.indexOf(depStation)
5
depLine.indexOf(depStation)
-1
var aUserJourney = 
  Math.abs(depLine.indexOf(depStation)) 
- Math.abs(depLine.indexOf('Richmond')) 
+ Math.abs(destLine.indexOf('Richmond')) 
- Math.abs(destLine.indexOf(destStation))
undefined
aUserJourney
0
var aUserJourney = 
  Math.abs(depLine.indexOf(depStation)) 
+ Math.abs(depLine.indexOf('Richmond')) 
- Math.abs(destLine.indexOf('Richmond')) 
+ Math.abs(destLine.indexOf(destStation))
undefined
aUserJourney
2