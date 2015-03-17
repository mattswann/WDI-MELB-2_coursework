function Line(name, stops){
  this.name = name;
  this.stops = stops;
}

function SubwaySystem(lines) {
  this.lines = lines;
  this.takeTrip = function(){
    var startLine = prompt("What line are you getting on at?");
    var startStation = prompt("What station are you getting on at?");
    var endLine = prompt("What line are you getting off at?");
    var endStation = prompt("What station are you getting off at?");

    if (startLine === endLine) {
      numStops = Math.abs(this.lines[endLine].stops.indexOf(endStation) - this.lines[startLine].stops.indexOf(startStation))
    } else {
      numStops = Math.abs(this.lines[endLine].stops.indexOf(endStation) - this.lines[endLine].stops.indexOf("Richmond")) + Math.abs(this.lines[startLine].stops.indexOf(startStation) - this.lines[startLine].stops.indexOf("Richmond"))
    }
    alert("Your trip will take " + numStops + " stops.")
  };
}

// var n = new Line('n', ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']);
// var l = new Line('l', ['8th', '6th', 'Union Square', '3rd','1st']);
// var s = new Line('s', ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]);

    var a = new Line('alamein', ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie']);
    var g = new Line('glenWaverly', ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']);
    var s = new Line('sandringham',  ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']);

var ptv = new SubwaySystem({a: a, g: g, s: s});

ptv.takeTrip();


