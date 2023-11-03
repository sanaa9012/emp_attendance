const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const closeIcon = document.querySelector('.close-icon');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

closeIcon.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});