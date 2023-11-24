let btn = document.getElementById('btn');
let text = document.getElementById('text');
let wrapper = document.getElementById('wrapper');
let btn2 = document.getElementById('btn2');

text.style.display = 'none';

btn.onclick = () => {
    if (text.style.display == 'none') {

text.style.display = 'block';
        btn2.disabled = true;

wrapper.style.left = '50%';
        wrapper.style.top = '50%';
        wrapper.style.transform = 'translate(-50%, -50%)';
    }
}

btn2.onclick = () => {
    wrapper.style.left = Math.round(Math.random() * (90 - 10) + 10) + '%';
    wrapper.style.top = Math.round(Math.random() * (80 - 20) + 20) + '%';
    text.style.display = 'none';
}