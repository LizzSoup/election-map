var logPolitician = function(name, color) {
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.color = color;

// Add the election results together 
  politician.calculateResults = function() {
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++ ) {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  };
};

  return politician;
};


// Create two new politicians
var morticia = logPolitician("Morticia Adams", [1, 27, 86]);
var daria = logPolitician("Daria Morgendorffer", [0, 180, 171]);


// Election results for each state
morticia.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,13,7,2];

daria.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

// Fix the vote counts for 3 states
morticia.electionResults[4]= 17;
morticia.electionResults[9] = 1;
morticia.electionResults[43] = 11;

daria.electionResults[4]= 38;
daria.electionResults[9] = 28;
daria.electionResults[43] = 27;

// Set State results 
 var setStateResults = function(state) {
  theStates[state].winner;

  if (morticia.electionResults[state] > daria.electionResults[state]) {
    theStates[state].winner = morticia;
  } else if (morticia.electionResults[state] < daria.electionResults[state]) {
    theStates[state].winner = daria;
  };

  var stateWinner = theStates[state].winner;
    if (stateWinner != null) {
      theStates[state].rgbColor = stateWinner.color;
    } else {
      theStates[state].rgbColor = [2, 105, 164];
    }

  stateName.innerText = theStates[state].nameFull;
  abbr.innerText = theStates[state].nameAbbrev;
 
  name1.innerText = morticia.name;
  name2.innerText = daria.name;
 
  name1Result.innerText = morticia.electionResults[state];
  name2Result.innerText = daria.electionResults[state];
 
if (theStates[state].winner === null){
    stateWinnerResult.innerText = "Tie";
} else {
    stateWinnerResult.innerText = theStates[state].winner.name;
}

  };

// Call calculate results method
morticia.calculateResults();
daria.calculateResults();

console.log(morticia.totalVotes);
console.log(daria.totalVotes);

// Calculate the winner
var winner;

if (morticia.totalVotes > daria.totalVotes) {
  winner = morticia.name;
} else if (morticia.totalVotes < daria.totalVotes) {
  winner = daria.name;
} else if (morticia.totalVotes === daria.totalVotes) {
  winner = "It's a draw";
} else {
  winner = "Technical difficulties, please tally again."
};

// Check results in console
console.log(winner);
console.log(morticia);
console.log(daria);

// Country results table 
var countryResults = document.getElementById("countryResults");
countryResults.children[0].children[0].children[0].innerText = morticia.name;
countryResults.children[0].children[0].children[1].innerText = morticia.totalVotes;
countryResults.children[0].children[0].children[2].innerText = daria.name;
countryResults.children[0].children[0].children[3].innerText = daria.totalVotes;
countryResults.children[0].children[0].children[5].innerText = winner;


// State results table
var stateTable = document.getElementById('stateResults');
var header = stateTable.children[0];
var body = stateTable.children[1];

var stateName = header.children[0].children[0];
var abbr = header.children[0].children[1];

var name1 = body.children[0].children[0];
var name1Result = body.children[0].children[1];

var name2 = body.children[1].children[0];
var name2Result = body.children[1].children[1];

var stateWinnerResult = body.children[2].children[1];

