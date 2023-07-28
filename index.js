// 1. Lorsque la boite **Masquer les paroles** est cochée, masquez tout les paroles et modifiez l'intitulé en **Afficher les paroles** 

// Récupere la case "masquer les paroles"
const checkboxParoles = document.getElementById('masquer-paroles');
console.log(checkboxParoles);
const label = document.querySelectorAll('label');
console.log(label);
// Récupère le div contenant les paroles
const divParoles = document.querySelector('div'); //
console.log(divParoles);
// Recupere les span avec la classe definition
const classDefinition = document.getElementsByClassName('definition');
// Attache une fonction à l'évènement "click" sur checkboxParoles
checkboxParoles.addEventListener('click', function (event) {
  // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

  // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
  if (event.target.checked) {
    // la case vient d'être cochée
    divParoles.classList.add('hidden');
    label[1].childNodes[1].textContent = 'Afficher les paroles'
  } else {
    // la case vient d'être decochée
    divParoles.classList.remove('hidden');
    label[1].childNodes[1].textContent = 'Masquer les paroles'

  }
});

// 2. Lorsque la boite **Masquer les refrains** est cochée, *remplacez* tous les refrains sauf le premier par **[Refrain]**, et modifiez l'intitulé de la boite en **Afficher les refrains**. 

const checkboxRefrain = document.getElementById('masquer-refrains')
const classRefrain = document.querySelectorAll('.refrain');
console.log(classRefrain);
let span = document.querySelectorAll('span');
console.log(span);

checkboxRefrain.addEventListener('click', function (event) {
  if (event.target.checked) {
    for(value of span){
      for(let i=0; i<span.length;i++){
        span[i].classList.remove('hidden');
        span[i].setAttribute("style","cursor:pointer; color:blue;")
        i = i+1;
       span[i].classList.add('hidden');
      }
    };
    label[0].childNodes[1].textContent = 'Afficher les refrain';

  }
  else{
 
      for(value of span){
        for(let i=0; i<span.length;i++){
          span[i].classList.add('hidden');
          i = i+1;
          span[i].classList.remove('hidden');
         
        }
      };
  
      label[0].childNodes[1].textContent = 'Masquer les refrain'
    }

});

//4. Avez vous réussi a ne pas laisser d'espaces blancs entre chaque paragraphe ?

const div = document.querySelector('div');
console.log(div.childNodes)
for(value of div.childNodes){
 for(let i = 0; i<value.length; i++){

 }
}