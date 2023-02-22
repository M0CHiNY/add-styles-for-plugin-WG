import './index.html';
import './chatDetail.html';

import './style.scss';
// Import noUiSlider
import noUiSlider from 'nouislider';


import Tagify from '@yaireo/tagify';

// // The DOM element you wish to replace with Tagify
var input = document.querySelector('.chat__key');


// // initialize Tagify on the above input node reference
new Tagify(input);

// var inputElm = document.querySelector,
//  new Tagify(inputElm);

input.addEventListener('change', onChange);

function onChange(e) {
  // outputs a String
  console.log(e.target.value);
}









// var formslider = document.querySelector('.form-slider');
// var hidenInput = document.querySelector('.form-slider__child');

// if(hidenInput.value == 0 || hidenInput.value == null){
//   hidenInput.value = 60;
// }

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
//     hidenInput = document.querySelector('.form-slider__child'); // hiden input 
//     hidenInput.value = (values[handle]);
//     stepSliderValueElement.innerHTML = (values[handle] / 100); 
//     hidenInput.values = stepSliderValueElement.innerHTML; // get value to hiden input
// });


