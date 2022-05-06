const moreBth = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBth.addEventListener('click', () => {
    moreBth.classList.toggle('clicked');
    title.classList.toggle('clamp');
});