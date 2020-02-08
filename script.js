const pictures = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9', 'cat10'];

let imgContainer = document.getElementById('img-container');
let buttonRight = document.getElementsByClassName('btn-right')[0];
let buttonLeft = document.getElementsByClassName('btn-left')[0];
let counter = 0;

imgContainer.style.backgroundImage = `url('./img/${pictures[0]}.jpg')`;

function slideRight() {
  counter++;
  if(counter > pictures.length -1){
    counter = 0;
  }
  imgContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`;
}

function slideLeft() {
  counter--;
  if(counter < 0){
    counter = pictures.length -1;
  }
  imgContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`;
}

buttonRight.addEventListener('click', slideRight);
buttonLeft.addEventListener('click', slideLeft);