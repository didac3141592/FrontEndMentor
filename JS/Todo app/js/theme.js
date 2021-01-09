function setLightTheme() {
    document.body.classList.remove('body-dark-theme');
    document.body.classList.add('body-light-theme');
    document.body.id = 'light';
    let banner = document.querySelector('.banner-dark-theme');
    banner.classList.remove('banner-dark-theme');
    banner.classList.add('banner-light-theme');
    let container = document.querySelectorAll('.container-dark-theme');
    container.forEach(element => {
        element.classList.remove('container-dark-theme');
        element.classList.add('container-light-theme');
    });
    let colorOne = document.querySelectorAll('.color-dark-theme-one');
    colorOne.forEach(element => {
        element.classList.remove('color-dark-theme-one');
        element.classList.add('color-light-theme-one');
    });
    let colorTwo = document.querySelectorAll('.color-dark-theme-two');
    colorTwo.forEach(element => {
        element.classList.remove('color-dark-theme-two');
        element.classList.add('color-light-theme-two');
    });
    let colorThree = document.querySelectorAll('.color-dark-theme-three');
    colorThree.forEach(element => {
        element.classList.remove('color-dark-theme-three');
        element.classList.add('color-light-theme-three');
    });
    let colorFour = document.querySelectorAll('.color-dark-theme-four');
    colorFour.forEach(element => {
        element.classList.remove('color-dark-theme-four');
        element.classList.add('color-light-theme-four');
    });
    let borderBottom = document.querySelectorAll('.border-bottom-dark-theme');
    borderBottom.forEach(element => {
        element.classList.remove('border-bottom-dark-theme');
        element.classList.add('border-bottom-light-theme')
    });
    let borderBotton = document.querySelectorAll('.border-button-dark-theme');
    borderBotton.forEach(element => {
        element.classList.remove('border-button-dark-theme');
        element.classList.add('border-button-light-theme');
    });
    let buttonToLight = document.querySelector('#to-light-theme');
    buttonToLight.classList.add('d-none');
    let buttonToDark = document.querySelector('#to-dark-theme');
    buttonToDark.classList.remove('d-none');
};
function setDarkTheme() {
    document.body.classList.remove('body-light-theme');
    document.body.classList.add('body-dark-theme');
    document.body.id = 'dark';
    let banner = document.querySelector('.banner-light-theme');
    banner.classList.remove('banner-light-theme');
    banner.classList.add('banner-dark-theme');
    let container = document.querySelectorAll('.container-light-theme');
    container.forEach(element => {
        element.classList.remove('container-light-theme');
        element.classList.add('container-dark-theme');
    });
    let colorOne = document.querySelectorAll('.color-light-theme-one');
    colorOne.forEach(element => {
        element.classList.remove('color-light-theme-one');
        element.classList.add('color-dark-theme-one');
    });
    let colorTwo = document.querySelectorAll('.color-light-theme-two');
    colorTwo.forEach(element => {
        element.classList.remove('color-light-theme-two');
        element.classList.add('color-dark-theme-two');
    });
    let colorThree = document.querySelectorAll('.color-light-theme-three');
    colorThree.forEach(element => {
        element.classList.remove('color-light-theme-three');
        element.classList.add('color-dark-theme-three');
    });
    let colorFour = document.querySelectorAll('.color-light-theme-four');
    colorFour.forEach(element => {
        element.classList.remove('color-light-theme-four');
        element.classList.add('color-dark-theme-four');
    });
    let borderBottom = document.querySelectorAll('.border-bottom-light-theme');
    borderBottom.forEach(element => {
        element.classList.remove('border-bottom-light-theme');
        element.classList.add('border-bottom-dark-theme')
    });
    let borderBotton = document.querySelectorAll('.border-button-light-theme');
    borderBotton.forEach(element => {
        element.classList.remove('border-button-light-theme');
        element.classList.add('border-button-dark-theme');
    });
    let buttonToLight = document.querySelector('#to-light-theme');
    buttonToLight.classList.remove('d-none');
    let buttonToDark = document.querySelector('#to-dark-theme');
    buttonToDark.classList.add('d-none');
};
function changeToLightTheme() {
    let button = document.querySelector('#to-light-theme');
    button.addEventListener('click', function(){
        setLightTheme();
    })
};
function changeToDarkTheme() {
    let button = document.querySelector('#to-dark-theme');
    button.addEventListener('click', function(){
        setDarkTheme();
    })
};

changeToDarkTheme();

changeToLightTheme();