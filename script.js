const container = document.querySelector('.container');
const cadastroBtn = document.querySelector('.cadastroBtn');
const loginBtn = document.querySelector('.loginBtn');

cadastroBtn.addEventListener('click', () => {
    container.classList.add('active');
});
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});