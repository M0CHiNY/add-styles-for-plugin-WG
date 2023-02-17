import './index.html';
import './chatDetail.html';

import './style.scss';
// Import noUiSlider
import noUiSlider from 'nouislider';


// init range slider
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

