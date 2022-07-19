try {
  $(document).ready(function () {
    $(".my-select-input").select2({
      width: 'resolve',
      bacground: 'resolve'
    });
  });
} catch (e) {}

// let my_selects = document.querySelectorAll('.my-select-input');

// my_selects.forEach(function(select) {
//     select.addEventListener('click', function(e) {
//         select.querySelector('.select__drobdown').classList.toggle('open');
//     });
// });


try {
  var options = {
    strings: ['<span class="h">Tashk</span> of what are you looking for!'],
    typeSpeed: 100,
    backSpeed: 100,
    // loop: true,
  };
  
  var typed = new Typed('.typed__words', options);
} catch (e) {}

let prevents = document.querySelectorAll('.prevent');
prevents.forEach(function (prevent) {
  prevent.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

try {
  let left__links = document.querySelector('.left__links');
  let clicker = document.querySelector('.clicker');
  clicker.addEventListener('click', function (e) {
    console.log('clicked', left__links);
    left__links.classList.toggle('on');
  });
} catch (e) {}

try {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      }
    },
    navigation: {
      nextEl: ".appcNext",
      prevEl: ".appcPrec",
    },
  });

  var swiper = new Swiper(".impressionsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      }
    },
    navigation: {
      nextEl: ".appcNext",
      prevEl: ".appcPrec",
    },
  });

  var swiper = new Swiper(".myImpressionSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      }
    },
    navigation: {
      nextEl: ".appcNext",
      prevEl: ".appcPrec",
    },
  });
} catch (e) {}

try {
  let peopleClose = document.querySelectorAll('.peopleClose');
  peopleClose.forEach(function (close_btn) {
    close_btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.target.offsetParent.classList.remove('open');
    });
  });
  let peopleUsers = document.querySelectorAll('.peopleUser');
  let peoples__right__link = document.querySelectorAll('.peoples__right__link');
  peopleUsers.forEach(function (user) {
    user.addEventListener('click', function (e) {
      e.preventDefault();
      peoples__right__link.forEach(function (link) {
        if (link != user.offsetParent) {
          link.classList.remove('open');
          console.log('removed');
        }
      });
      user.offsetParent.classList.toggle('open');
    });
  });
} catch (e) {}

try {
  let productsNav = document.querySelectorAll('.productsNav a');
  productsNav.forEach(function (nav) {
    nav.addEventListener('click', function (e) {
      e.preventDefault();
      productsNav.forEach(function (link) {
        link.classList.remove('active');
      });
      nav.classList.add('active');
    });
  });
} catch (e) {}

try {
  let colapse_btn = document.querySelector('.toolbar .colapse');
  let colapse_menu = document.querySelector('.navbar ul');
  colapse_btn.addEventListener('click', function (e) {
    e.preventDefault();
    colapse_menu.classList.toggle('colapse');
  });
} catch (e) {}

try {
  let my_inputs = document.querySelectorAll('.my_input');
  my_inputs.forEach(function (input) {
    input.addEventListener('focus', function (e) {
      input.parentElement.querySelector('label').classList.add('focus');
    });
    input.addEventListener('blur', function (e) {
      input.parentElement.querySelector('label').classList.remove('focus');
    });
  });

  let video = document.querySelector('.video');
  let v_btn = video.querySelector('a');
  let v = video.querySelector('video');
  v_btn.addEventListener('click', function (e) {
    e.preventDefault();
    v.play();
    v.controls = true;
    v_btn.classList.add('d-none');
  });
} catch (e) {}