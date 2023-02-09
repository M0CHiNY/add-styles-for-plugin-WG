import './index.html';

import './style.scss';

// Range slider

let sheet = document.createElement('style');
let rangeInput = document.querySelector('.range input');
let rangeLabels = document.querySelectorAll('.range-labels li');
let prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

let getTrackStyle = function (el) {
    let curVal = el.value,
        val = (curVal - 1) * 16.666666667,
        style = '';

    // Set active label
    let activeLabels = document.querySelectorAll('.range-labels li.active, .range-labels li.selected');
    for (let i = 0; i < activeLabels.length; i++) {
        activeLabels[i].classList.remove('active', 'selected');
    }

    let curLabel = document.querySelector('.range-labels li:nth-child(' + (curVal) + ')');

    curLabel.classList.add('active', 'selected');

    let selectedLabels = document.querySelectorAll('.range-labels li:nth-child(-n+' + (curVal - 1) + ')');
    for (let i = 0; i < selectedLabels.length; i++) {
        selectedLabels[i].classList.add('selected');
    }

    // Change background gradient
    for (let i = 0; i < prefs.length; i++) {
        style += '.range {background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #fff ' + val + '%, #fff 100%)}';
        style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
    }

    return style;
}

rangeInput.addEventListener('input', function () {
    sheet.textContent = getTrackStyle(this);
});

for (let i = 0; i < rangeLabels.length; i++) {
    rangeLabels[i].addEventListener('click', function () {
        let index = Array.prototype.indexOf.call(rangeLabels, this);
        rangeInput.value = index + 1;
        sheet.textContent = getTrackStyle(rangeInput);
    });
}
