// alert('game')

// let questions = [[     // I= REPRESENTE LE NOMBRE DE TABLEAU DANS L'api

//     {
//       "question": "Quel est l’autre nom de l’Homme-Mystère ?", // I=0
//       "response": [
//         {
//           "text": "Le Saphinx", //j=0
//           "isGood": true
//         },
//         {
//           "text": "Le Saphir",//j=1
//           "isGood": true
//         },
//         {
//           "text": "Le Joker", //j=2
//           "isGood": true
//         }
//       ]
//     },
//     {
//       "question": "Quelle est l’ancienne profession de Harley Quinn ?", // I=1
//       "response": [
//         {
//           "text": "Infimière", //j=0
//           "isGood": false
//         },
//         {
//           "text": "Psychiatre", //j=1
//           "isGood": true
//         },
//         {
//           "text": "Dentiste", //j=2
//           "isGood": false
//         }
//       ]
//     },
//     {
//       "question": "Quel est l’objet fétiche de Double Face ?", // I=2
//       "response": [
//         {
//           "text": "Une pièce",  //j=0
//           "isGood": true
//         },
//         {
//           "text": "Un livre", //j=1
//           "isGood": false
//         },
//         {
//           "text": "Un couteau", //j=2
//           "isGood": false
//         }
//       ]
//     },
//     {
//       "question": "Quelle ville Batman défend-il ?", // I=3
//       "response": [
//         {
//           "text": "Gotham City", //j=0
//           "isGood": true
//         },
//         {
//           "text": "Starling City", //j=1
//           "isGood": false
//         },
//         {
//           "text": "Tananarive", //j=2
//           "isGood": false
//         }
//       ]
//     },
//     {
//       "question": "Tim Burtin a réalisé deux Batman, qui jouait Batman ?", // I=4
//       "response": [
//         {
//           "text": "Georges Clooney",
//           "isGood": false
//         },
//         {
//           "text": "Val Kilmer",
//           "isGood": false
//         },
//         {
//           "text": "Mickael Keaton",
//           "isGood": false
//         }
//       ]
//     },
//     {
//       "question": "Quel est le prénom des parents du jeune Bruce Wayne ?", // I=5
//       "response": [
//         {
//           "text": "Matina et Adam",
//           "isGood": false
//         },
//         {
//           "text": "Elaine et Georges",
//           "isGood": true
//         },
//         {
//           "text": "Martha et James",
//           "isGood": false
//         }
//       ]
//     },
//     {
//       "question": "Dans son premier Batman (1989) Jack Nicholson jouait :", // I=6
//       "response": [
//         {
//           "text": "Le Pingouin",
//           "isGood": false
//         },
//         {
//           "text": "L'Homme mystère",
//           "isGood": true
//         },
//         {
//           "text": "Le Geek",
//           "isGood": false
//         }
//       ]
//     },
//     {
//       "question": " Qui interprète le Joker en 2008 ?", // I=7
//       "response": [
//         {
//           "text": "Heath Legder",
//           "isGood": false
//         },
//         {
//           "text": "Haeth Ledger",
//           "isGood": false
//         },
//         {
//           "text": "Heath Ledger",
//           "isGood": true
//         }
//       ]
//     },
//     {
//       "question": "En quelle année Robin fait il sa première apparition ?", // I=8
//       "response": [
//         {
//           "text": "1940",
//           "isGood": true
//         },
//         {
//           "text": "1936",
//           "isGood": false
//         },
//         {
//           "text": "1941",
//           "isGood": false
//         }
//       ]
//     },
//     {
//       "question": "Qui est la fille de Batman et Catwoman (Earth - 2) ?", // I=9
//       "response": [
//         {
//           "text": "Oracle Huntress",
//           "isGood": true
//         },
//         {
//           "text": "Black Canary",
//           "isGood": false
//         },
//         {
//           "text": "L'Epouvantail",
//           "isGood": false
//         }
//       ]
//     },
//     {
//       "question": "Batman c’est aussi le nom d’une ville en...", // I=10
//       "response": [
//         {
//           "text": "Islande",
//           "isGood": false
//         },
//         {
//           "text": "Turquie",
//           "isGood": true
//         },
//         {
//           "text": "Allemagne",
//           "isGood": false
//         }
//       ]
//     },
//     {
//       "question": "Qui a realisé Batman en 1966 ?", // I=11
//       "response": [
//         {
//           "text": "Stanley Kubrick",
//           "isGood": false
//         },
//         {
//           "text": "Andy Warhol",
//           "isGood": false
//         },
//         {
//           "text": "Leslie Martinson",
//           "isGood": true
//         }
//       ]
//     }
//   ]]


let questions = [    
     {
       "question": "Quel est l’autre nom de l’Homme-Mystère ?", // I=0
       "response": [
         {
           "text": "Le Saphinx", //j=0
           "isGood": true
         },
         {
           "text": "Le Saphir",//j=1
           "isGood": true
         },
         {
          "text": "Le Joker", //j=2
           "isGood": true
         }
       ]
     },
    
      ]


  let conteneurcompte = document.querySelectorAll('.conteneurcompte');
  let compteur = document.querySelectorAll('.compteur');
  let totalcompte = document.querySelectorAll('.totalcompte');

  let conteneurquiz = document.querySelectorAll('.conteneurquiz');
  let demarrezquiz = document.querySelectorAll('.demarrezquiz');
 

  let imagequiz = document.querySelectorAll('.imagequiz');
  let question = document.querySelectorAll('.question');
  let check1 = document.querySelectorAll('#check1');
  let check2 = document.querySelectorAll('#check2');
  let check3 = document.querySelectorAll('#check3');
  let rep1 = document.querySelectorAll('.rep1');
  let rep2 = document.querySelectorAll('.rep2');
  let rep3 = document.querySelectorAll('.rep3');
  let nextquestion = document.querySelectorAll('.nextquestion');


  let div = document.createElement('div');
  div.classList.add('conteneurquiz');

  // let demarrezbtn = document.getElementById('demarrezquiz');
  // demarrezbtn.addEventListener('click', showquiz1);

  // function showquiz1 () {
  //   const question = document.getElementById ('#sec2game'); question.remove();
  // }

  document.querySelector("#demarrezquiz").onclick = function() {
    const button = document.getElementById ('button'); button.remove();
  }

 
