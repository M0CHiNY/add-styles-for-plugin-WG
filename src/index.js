import './index.html';

import './style.scss';
// Import noUiSlider
import noUiSlider from 'nouislider';
import range from './img/buttonRangeslider.svg'



var formslider = document.querySelector('.form-slider');

noUiSlider.create(formslider , {
   start: [70],
   connect: 'lower',
    step: 10,
    range: {
        'min': 0,
        'max': 100
    }
});


formslider.noUiSlider.on('update', function (values, handle) {
    let stepSliderValueElement = document.querySelector('.form-slider__text'),
        hidenInput = document.querySelector('.form-slider__child');
    stepSliderValueElement.innerHTML = (values[handle] / 100);
    hidenInput.values = stepSliderValueElement.innerHTML;
});

const createImg = document.createElement("img"),
      buttonDef = document.querySelector('.noUi-touch-area');




    createImg.src = range;
    buttonDef.appendChild(createImg);