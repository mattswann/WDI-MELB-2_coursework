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
      numStops = 

      Math.abs(this.lines[endLine].stops.indexOf(endStation) 
        - this.lines[startLine].stops.indexOf(startStation))
    } 

    else {

      numStops = Math.abs(this.lines[endLine].stops.indexOf(endStation) - this.lines[endLine].stops.indexOf("Richmond")) 

      + Math.abs(this.lines[startLine].stops.indexOf(startStation) - this.lines[startLine].stops.indexOf("Richmond"))
    }
    alert("Your trip will take " + numStops + " stops.")
  };
}

    var alamein = new Line('alamein', ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie']);
    var glenWaverly = new Line('glenWaverly', ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']);
    var sandringham = new Line('sandringham',  ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']);

var ptv = new SubwaySystem({alamein: alamein, glenWaverly: glenWaverly, sandringham: sandringham});

ptv.takeTrip();


