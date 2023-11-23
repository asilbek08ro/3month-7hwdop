let btn = document.getElementById('btn');
let text = document.getElementById('text');
let wrapper = document.getElementById('wrapper');
let btn2 = document.getElementById('btn2');

text.style.display = 'none';

btn.onclick = () => {
    if (text.style.display == 'none') {
        text.style.display = 'block';
        // Делаем кнопку "Нет" неактивной после нажатия "Да"
        btn2.disabled = true;
        
        // Сбрасываем положение wrapper в центр
        wrapper.style.left = '50%';
        wrapper.style.top = '50%';
        wrapper.style.transform = 'translate(-50%, -50%)';
    }
    // Если текст видимый, не делаем ничего (не скрываем его)
}

btn2.onclick = () => {
    // Изменяем положение wrapper случайным образом
    wrapper.style.left = Math.round(Math.random() * (90 - 10) + 10) + '%';
    wrapper.style.top = Math.round(Math.random() * (80 - 20) + 20) + '%';
    // При каждом клике на "Нет" делаем текст видимым
    text.style.display = 'none';
}
