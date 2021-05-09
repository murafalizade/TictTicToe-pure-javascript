var allsvg = document.querySelectorAll("svg");
for(let i =0;i<allsvg.length;i++){
    allsvg[i].style.display="none";
}
const create = (id)=>{
    var pathEls = document.querySelectorAll(`#${id}>line`);
    var svg = document.querySelector(`#${id}`);
    svg.style.display = "block" ;
    for (var i = 0; i < pathEls.length; i++) {
        var pathEl = pathEls[i];
        var offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute('stroke-dashoffset', offset);
        anime({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: anime.random(500, 3000),
            delay: anime.random(0, 500),
            loop: false,
            direction: 'alternate',
            easing: 'easeInOutSine',
            autoplay: true
        });
    }
}
