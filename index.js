// alert('game')

let questions = [
  {
      "question": "Quel est l’autre nom de l’Homme-Mystère ?",
      "response": [
          {
              "text": "Le Saphinx",
              "isGood": true
          },
          {
              "text": "Le Saphir",
              "isGood": true
          },
          {
              "text": "Le Joker",
              "isGood": true
          }
      ]
  },
  {
      "question": "Quelle est l’ancienne profession de Harley Quinn ?",
      "response": [
          {
              "text": "Infimière",
              "isGood": false
          },
          {
              "text": "Psychiatre",
              "isGood": true
          },
          {
              "text": "Dentiste",
              "isGood": false
          }
      ]
  },
  {
      "question": "Quel est l’objet fétiche de Double Face ?",
      "response": [
          {
              "text": "Une pièce",
              "isGood": true
          },
          {
              "text": "Un livre",
              "isGood": false
          },
          {
              "text": "Un couteau",
              "isGood": false
          }
      ]
  },
  {
      "question": "Quelle ville Batman défend-il ?",
      "response": [
          {
              "text": "Gotham City",
              "isGood": true
          },
          {
              "text": "Starling City",
              "isGood": false
          },
          {
              "text": "Tananarive",
              "isGood": false
          }
      ]
  },
  {
      "question": "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
      "response": [
          {
              "text": "Georges Clooney",
              "isGood": false
          },
          {
              "text": "Val Kilmer",
              "isGood": false
          },
          {
              "text": "Mickael Keaton",
              "isGood": false
          }
      ]
  },
  {
      "question": "Quel est le prénom des parents du jeune Bruce Wayne ?",
      "response": [
          {
              "text": "Matina et Adam",
              "isGood": false
          },
          {
              "text": "Elaine et Georges",
              "isGood": true
          },
          {
              "text": "Martha et James",
              "isGood": false
          }
      ]
  },
  {
      "question": "Dans son premier Batman (1989) Jack Nicholson jouait :",
      "response": [
          {
              "text": "Le Pingouin",
              "isGood": false
          },
          {
              "text": "L'Homme mystère",
              "isGood": true
          },
          {
              "text": "Le Geek",
              "isGood": false
          }
      ]
  },
  {
      "question": " Qui interprète le Joker en 2008 ?",
      "response": [
          {
              "text": "Heath Legder",
              "isGood": false
          },
          {
              "text": "Haeth Ledger",
              "isGood": false
          },
          {
              "text": "Heath Ledger",
              "isGood": true
          }
      ]
  },
  {
      "question": "En quelle année Robin fait il sa première apparition ?",
      "response": [
          {
              "text": "1940",
              "isGood": true
          },
          {
              "text": "1936",
              "isGood": false
          },
          {
              "text": "1941",
              "isGood": false
          }
      ]
  },
  {
      "question": "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
      "response": [
          {
              "text": "Oracle Huntress",
              "isGood": true
          },
          {
              "text": "Black Canary",
              "isGood": false
          },
          {
              "text": "L'Epouvantail",
              "isGood": false
          }
      ]
  },
  {
      "question": "Batman c’est aussi le nom d’une ville en...",
      "response": [
          {
              "text": "Islande",
              "isGood": false
          },
          {
              "text": "Turquie",
              "isGood": true
          },
          {
              "text": "Allemagne",
              "isGood": false
          }
      ]
  },
  {
      "question": "Qui a realisé Batman en 1966 ?",
      "response": [
          {
              "text": "Stanley Kubrick",
              "isGood": false
          },
          {
              "text": "Andy Warhol",
              "isGood": false
          },
          {
              "text": "Leslie Martinson",
              "isGood": true
          }
      ]
  },
  {
      "question": "Qui interprète le Joker en 2008 ?\n",
      "response": [
          {
              "text": "Heath Legder\n",
              "isGood": false
          },
          {
              "text": "Haeth Ledger\n",
              "isGood": false
          },
          {
              "text": "Heath Ledger\n",
              "isGood": true
          }
      ]
  }
];




 
  let compteur = document.querySelector('.compteur'); //8
  let totalcompte = document.querySelector('.totalcompte');//7

  let conteneurquiz = document.querySelectorAll('.conteneurquiz');
  let demarrezquiz = document.querySelector('#demarrezquiz'); //3
 
 

  let imagequiz = document.querySelector('#personnage1'); //5
  let sujet = document.querySelector('#sujet'); //2
 
  let answer = document.querySelectorAll('.reponse'); //4
 
  let nextquestion = document.querySelector('#btnChange');//6
  let i=0;
  let j=0;
  

  function valueChange () {
    if (i<=questions.length) {let element = questions[i].question;
    sujet.innerText=element;
          if(j<=questions[i].response.length){
            let valeurAnswer0 = questions[i].response[0].text;
            let valeurAnswer1 = questions[i].response[1].text;
            let valeurAnswer2 = questions[i].response[2].text;
            answer[0].innerText = valeurAnswer0;
            answer[1].innerText = valeurAnswer1;
            answer[2].innerText = valeurAnswer2;

          };

          let debut = 1;
          debut =1+i;
          compteur.innerText= debut;

          if ( i===0) {

          }

          else if (i===1) {
                imagequiz.src='/illustrations/Illustrations2/Batgame_4.png';
          }               else if (i===2){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_5.png';
          }               else if (i===3){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_6.png';
          }               else if (i === 4){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_7.png';
          }               else if (i === 5){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_8.png';
          }               else if (i === 6){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_10.png';
          }               else if (i === 7){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_11.png';
          }               else if (i === 8){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_12.png';
          }               else if (i === 9){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_14.png';
          }               else if (i === 10){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_17.png';
          }               else if (i === 11){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_18.png';
          }               else if (i === 12){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_19.png';
          }               else if (i === 13){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_20.png';
          }               else if (i === 14){
                imagequiz.src = '../illustrations/Illustrations2/Batgame_21.png';
          }
          
          i++;

        } 
      
  };

  demarrezquiz.addEventListener("click", valueChange);
  nextquestion.addEventListener("click", valueChange);


  demarrezquiz.addEventListener("click", function() {
    
    window.location.href = "#sujet";
    demarrezquiz.style.visibility = "hidden";
    conteneurReponse.style.display = "block";
    
    totalCompte.style.display = "block";
    imageQuiz.style.display = "block";

  });

   let totalCompte = document.querySelector('.totalcompte');
   totalCompte.style.display = "none";
  let conteneurReponse = document.querySelector('#conteneurrep');
  conteneurReponse.style.display = "none";
  let imageQuiz = document.querySelector('#personnage1');
  imageQuiz.style.display = "none";







  // let div = document.createElement('div');
  // div.classList.add('conteneurquiz');

  // // let demarrezbtn = document.getElementById('demarrezquiz');
  // // demarrezbtn.addEventListener('click', showquiz1);

  // // function showquiz1 () {
  // //   const question = document.getElementById ('#sec2game'); question.remove();
  // // }

  // document.querySelector("#demarrezquiz").onclick = function() {
  //   const button = document.getElementById ('button'); button.remove();
  // }

 
