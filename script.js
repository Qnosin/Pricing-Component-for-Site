let slider = document.getElementById('slider');
let price = document.getElementById('price');

slider.oninput = function() {
    if (slider.value == 0) {
        price.innerHTML = 'Free'
    } else {
        price.innerHTML = slider.value + '$'
    }
};