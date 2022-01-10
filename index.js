// Code your solution in this file!

// 1 
const companyName = 'Scuber';

// 2
let mostProfitableNeighborhood = "Chelsea";

// 3 
let companyCeo = "Susan Smith";
/*
companyName
      1) is set as Scuber
      2) is defined as a const
    mostProfitableNeighborhood
      3) is declared as equal to Chelsea
      4) is defined using let
    companyCeo
      5) is declared as equal to Susan Smith
      6) is defined using let


  0 passing (188ms)
  6 failing

  1) index.js
       companyName
         is set as Scuber:
     ReferenceError: companyName is not defined
      at Context.<anonymous> (test/indexTest.js:9:14)
      at processImmediate (node:internal/timers:464:21)

  2) index.js
       companyName
         is defined as a const:
     AssertionError: Expected companyName to be a const: expected '// Code your solution in this file!\n' to match /const companyName/
      at Context.<anonymous> (test/indexTest.js:13:21)
      at processImmediate (node:internal/timers:464:21)

  3) index.js
       mostProfitableNeighborhood
         is declared as equal to Chelsea:
     ReferenceError: mostProfitableNeighborhood is not defined
      at Context.<anonymous> (test/indexTest.js:19:14)
      at processImmediate (node:internal/timers:464:21)

  4) index.js
       mostProfitableNeighborhood
         is defined using let:
     AssertionError: Expected mostProfitableNeighborhood to be defined using let: expected '// Code your solution in this file!\n' to match /let mostProfitableNeighborhood/
      at Context.<anonymous> (test/indexTest.js:23:21)
      at processImmediate (node:internal/timers:464:21)

  5) index.js
       companyCeo
         is declared as equal to Susan Smith:
     ReferenceError: companyCeo is not defined
      at Context.<anonymous> (test/indexTest.js:29:14)
      at processImmediate (node:internal/timers:464:21)

  6) index.js
       companyCeo
         is defined using let:
     AssertionError: Expected companyCeo to be defined using let: expected '// Code your solution in this file!\n' to match /let companyCeo/
*/