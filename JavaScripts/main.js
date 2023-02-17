const loginform = document.querySelector('.auth');
const loginbtn = document.querySelector('#loginbtn');
const regbtn = document.querySelector('#regbtn');
const logbtn = document.querySelector('.avttxt');
const regform = document.querySelector('.regstyle');
const regbtn2 = document.querySelector('.reg-style');

loginbtn.addEventListener('click', () => {
    loginform.style.display = 'flex';
    regform.style.display = 'none';
});

logbtn.addEventListener('click', () => {
    loginform.style.display = 'flex';
    regform.style.display = 'none';
});
regbtn.addEventListener('click', () => {
    loginform.style.display = 'none';
    regform.style.display = 'flex';
});

regbtn2.addEventListener('click', () => {
    loginform.style.display = 'none';
    regform.style.display = 'flex';
});