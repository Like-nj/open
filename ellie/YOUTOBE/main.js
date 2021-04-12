const moreBtn = document.querySelector('.info .titleAndButton .moreBtn');
const title = document.querySelector('.info .titleAndButton .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});