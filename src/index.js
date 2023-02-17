import './index.html';
import './chatDetail.html';

import './style.scss';
// Import noUiSlider
import noUiSlider from 'nouislider';


// init range slider
 secondPage-5.1
// var formslider = document.querySelector('.form-slider');
// var hidenInput = document.querySelector('.form-slider__child');

// noUiSlider.create(formslider , {
//    start: hidenInput.value,
//    connect: 'lower',
//     step: 10,
//     range: {
//         'min': 0,
//         'max': 100
//     },
// });


// // function update addEvenListener 
// formslider.noUiSlider.on('update', function (values, handle) {
//     let stepSliderValueElement = document.querySelector('.form-slider__text');//get slider text 
//     // hidenInput = document.querySelector('.form-slider__child'); // hiden input 
//     stepSliderValueElement.innerHTML = (values[handle] / 100); 
//     hidenInput.values = stepSliderValueElement.innerHTML; // get value to hiden input
// });

// const ResetButton = document.querySelector('.settings__btn-reset');

// ResetButton.addEventListener('click', ()=> {
//     const saveButton = document.querySelector('.settings__btn-save');
//     saveButton.classList.add('button-active');// addClass
//     formslider.noUiSlider.set(0);// reset range slider
//     this.addEventListener('click', ()=>{
//         this.classList.remove ('button-active');// removeClass
//     })
// })


//Keywords

const ul = document.querySelector(".chat__key-list"),
  input = document.querySelector(".chat__key"),
  tagNumb = document.querySelector(".chat__details .chat__keys");

let tags = ['Sport', 'Sport News'];
  

countTags();
createTag();

function countTags() {
  input.focus();
}

function createTag() {
  ul.querySelectorAll("li").forEach((li) => li.remove());
  tags
    .slice()
    .reverse()
    .forEach((tag) => {
      let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
      ul.insertAdjacentHTML("afterbegin", liTag);
    });
  countTags();
}

function remove(element, tag) {
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
  element.parentElement.remove();
  countTags();
}

function addTag(e) {
  if (e.key == "Enter") {
    let tag = e.target.value.replace(/\s+/g, " ");
    if (tag.length > 1 && !tags.includes(tag)) {
      if (tags.length < 10) {
        tag.split(",").forEach((tag) => {
          tags.push(tag);
          createTag();
        });
      }
    }
    e.target.value = "";
  }
}

input.addEventListener("keyup", addTag);

=======
var formslider = document.querySelector('.form-slider');
var hidenInput = document.querySelector('.form-slider__child');

if(hidenInput.value == 0 || hidenInput.value == null){
  hidenInput.value = 60;
}

noUiSlider.create(formslider , {
   start: hidenInput.value,
   connect: 'lower',
    step: 10,
    range: {
        'min': 0,
        'max': 100
    },
});


// function update addEvenListener 
formslider.noUiSlider.on('update', function (values, handle) {
    let stepSliderValueElement = document.querySelector('.form-slider__text');//get slider text 
    hidenInput = document.querySelector('.form-slider__child'); // hiden input 
    hidenInput.value = (values[handle]);
    stepSliderValueElement.innerHTML = (values[handle] / 100); 
    hidenInput.values = stepSliderValueElement.innerHTML; // get value to hiden input
});
master

