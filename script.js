let slider = document.getElementById('slider');
let price = document.getElementById('price');
let switchBtn = document.getElementById('switch');

slider.oninput = function() {
    if (slider.value == 0) {
        price.innerHTML = 'Free'
    } else {
        price.innerHTML = slider.value + '$'
    }
};

switchBtn.onclick = function() {
    switchBtn.classList.toggle("move");
    document.getElementById('back').classList.toggle("changeBack");
}