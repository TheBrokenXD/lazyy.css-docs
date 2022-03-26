let burger = document.querySelector('.lottie');
let nav = document.querySelector('#toggle');

let animation = bodymovin.loadAnimation({
    container: burger,  
    renderer: 'svg', 
    loop: false,
    autoplay: false,
    path: 'data.json'
});

let frameReverse = 1;

burger.addEventListener('click', (e) => {
    animation.setDirection(frameReverse);
    animation.play();
    frameReverse = -frameReverse;
    if(nav.className == "sidebar") {
        nav.className = 'sidebar-toggled';
    } else {
        nav.className = "sidebar";
    }
});
