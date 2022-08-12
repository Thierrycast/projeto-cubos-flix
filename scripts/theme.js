const container = document.querySelector('.container');
const btnTheme = document.querySelector('.btn-theme');
const body = document.querySelector('body')


let theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'white';

btnTheme.addEventListener('click', () => {
    theme = localStorage.getItem('theme') === 'dark' ? 'white' : 'dark'
    btnTheme.src = theme === 'dark' ? "../assets/light-mode.svg" : "../assets/dark-mode.svg";
    btnPrev.src = theme === 'dark' ? "../assets/seta-esquerda-branca.svg" : "../assets/seta-esquerda-preta.svg";
    btnNext.src = theme === 'dark' ? "../assets/seta-direita-branca.svg" : "../assets/seta-direita-preta.svg";

    changeTheme()
})
const changeTheme = () => {
    btnPrev.src = theme === 'white' ? "../assets/seta-esquerda-preta.svg" : "../assets/seta-esquerda-branca.svg";
    btnNext.src = theme === 'white' ? "../assets/seta-direita-preta.svg" : "../assets/seta-direita-branca.svg";

    btnTheme.src = theme === 'white' ? "../assets/light-mode.svg" : "../assets/dark-mode.svg";

    body.style.setProperty('background-color', theme === 'white' ? '#FFF' : '#242424');
    container.style.setProperty('background-color', theme === 'white' ? '#FFF' : '#242424');
    container.style.setProperty('--background-color', theme === 'white' ? '#FFF' : '#242424');
    container.style.setProperty('--input-border-color', theme === 'white' ? '#979797' : '#FFF');
    container.style.setProperty('--color', theme === 'white' ? '#000' : '#FFF');
    container.style.setProperty('--shadow-color', theme === 'white' ? '0px 4px 8px rgba(0, 0, 0, 0.15)' : '0px 4px 8px rgba(255, 255, 255, 0.15)');
    container.style.setProperty('--highlight-background', theme === 'white' ? '#FFF' : '#454545');
    container.style.setProperty('--highlight-color', theme === 'white' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)');
    container.style.setProperty('--highlight-description', theme === 'white' ? 'rgba(0, 0, 0, 0.8)' : '#FFF');

    localStorage.setItem('theme', theme);
}

changeTheme();
