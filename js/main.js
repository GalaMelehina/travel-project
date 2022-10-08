const owl = $(".owl-carousel");
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 0,
    items: 1,
    responsive: {
        550: {
            items: 3,
        },
        850: {
            items: 3,
            startPosition: 1,
        },
        1200: {
            items: 3,
            margin: 30,
        }
    }

});

$(".slider__button--prev").click(function () {
    owl.trigger("next.owl.carousel");
});

$(".slider__button--next").click(function () {
    owl.trigger("prev.owl.carousel");
});

// const navBtn = document.querySelector('.nav_toggle');
// const menuIcon = document.querySelector('.nav-icon');

// navBtn.addEventListener('click', function () {
//     menuIcon.classList.toggle('nav-icon--active');
// });

// // navBtn.onclick = function() {
// //     menuIcon.classList.toggle('nav-icon--active');
// // };

const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav_toggle');

document.querySelector('.nav__toggle').addEventListener('click', function () {
    nav.classList.toggle('nav--mobile');
    this.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll')
})
