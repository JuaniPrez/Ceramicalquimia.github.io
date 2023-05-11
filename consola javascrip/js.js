const video = document.getElementById('video');
const videoPosicion = video.offsetTop;

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= videoPosicion){
        video.play();
    };
});