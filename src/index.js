import './index.html';

import './style.scss';
// Import noUiSlider
import noUiSlider from 'nouislider';


// init range slider
var formslider = document.querySelector('.form-slider');
var hidenInput = document.querySelector('.form-slider__child');

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
    // hidenInput = document.querySelector('.form-slider__child'); // hiden input 
    stepSliderValueElement.innerHTML = (values[handle] / 100); 
    hidenInput.values = stepSliderValueElement.innerHTML; // get value to hiden input
});

const ResetButton = document.querySelector('.settings__btn-reset');

ResetButton.addEventListener('click', ()=> {
    const saveButton = document.querySelector('.settings__btn-save');
    saveButton.classList.add('button-active');// addClass
    formslider.noUiSlider.set(0);// reset range slider
    this.addEventListener('click', ()=>{
        this.classList.remove ('button-active');// removeClass
    })
} )
