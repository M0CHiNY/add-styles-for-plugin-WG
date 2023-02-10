import './index.html';

import './style.scss';
// Import noUiSlider
import noUiSlider from 'nouislider';
// Get image in folder img
import range from './img/buttonRangeslider.svg'


// init range slider
var formslider = document.querySelector('.form-slider');

noUiSlider.create(formslider , {
   start: [70],
   connect: 'lower',
    step: 10,
    range: {
        'min': 0,
        'max': 100
    },
});

// function update addEvenListener 
formslider.noUiSlider.on('update', function (values, handle) {
    let stepSliderValueElement = document.querySelector('.form-slider__text'),//get slider text 
        hidenInput = document.querySelector('.form-slider__child'); // hiden input 
    stepSliderValueElement.innerHTML = (values[handle] / 100); 
    hidenInput.values = stepSliderValueElement.innerHTML; // get value to hiden input
});


const createImg = document.createElement("img"), // create img tag <img>
      buttonDef = document.querySelector('.noUi-handle'); // search touch 

      function setImage(img, value){ // get tag img and 
        img.src = value;
        buttonDef.appendChild(img); // insert image to html
      }

 setImage(createImg, range);  //call function setImage ();
