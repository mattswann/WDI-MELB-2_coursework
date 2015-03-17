var bob = [3,2,6,11,9,2,6,9,10];
var jim = [5,12,9,22,13,7,16,10,11];
var fish = [2,2,4,5,4,3,6,4,1];
var par = [3,4,5,5,3,3,4,3,5];

function totalScores(golfer){
  console.log('Total scores ' + total(golfer))  
};

function compareToPar(golfer){
  comparePar(golfer).forEach(function(hole, i)
  {console.log("Hole "+ i +" is " + hole)
  });  
};

function total(golfer){
    return golfer.reduce(function(max, hole){return max + hole});
};

function comparePar(golfer){
  var result = []
  golfer.forEach(function(hole, i){result = result.concat(hole - par[i])});  
  return result;
};

function fishWinnigs(){
  return total(comparePar(bob)) + total(comparePar(jim));
}