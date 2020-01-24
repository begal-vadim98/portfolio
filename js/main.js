$('.menu-slider').slick({
  infinite: true,
  dots: true,
  autoplay: true,
  speed: 1000,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1
});

var linkNav = document.querySelectorAll('[href^="#"]'), 
    V = 0.4;  // скорость
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');  
        t = document.querySelector(hash).getBoundingClientRect().top,  
            start = null;
        requestAnimationFrame(step);  
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  
            }
        }
    }, false);
}

const headerDots = document.querySelectorAll('.header-dots__item'),
    header = document.querySelector('.header'),
    headerTitle = document.querySelector('.header-text__title'),
    link = document.querySelector('.link__top'),
    linkTop = document.documentElement
    // html =  document.documentElement

    headerDots[0].addEventListener('click', () => {
        header.style.background = 'url(../img/header-bg.jpg) center top / cover no-repeat';
        headerTitle.innerText = 'Welcome';
    });

    headerDots[1].addEventListener('click', () => {
        header.style.background = 'url(../img/header-bg2.jpg) center top / cover no-repeat';
        headerTitle.innerHTML = 'Friends';
    });

    headerDots[2].addEventListener('click', () => {
        header.style.background = 'url(../img/header-bg3.jpg) center top / cover no-repeat';
        headerTitle.innerHTML = 'Shoop';
    });

