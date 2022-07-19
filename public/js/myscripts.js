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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJteXNjcmlwdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidHJ5IHtcclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLm15LXNlbGVjdC1pbnB1dFwiKS5zZWxlY3QyKHtcclxuICAgICAgd2lkdGg6ICdyZXNvbHZlJyxcclxuICAgICAgYmFjZ3JvdW5kOiAncmVzb2x2ZSdcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59IGNhdGNoIChlKSB7fVxyXG5cclxuLy8gbGV0IG15X3NlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXktc2VsZWN0LWlucHV0Jyk7XHJcblxyXG4vLyBteV9zZWxlY3RzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0KSB7XHJcbi8vICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2Ryb2Jkb3duJykuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbnRyeSB7XHJcbiAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICBzdHJpbmdzOiBbJzxzcGFuIGNsYXNzPVwiaFwiPlRhc2hrPC9zcGFuPiBvZiB3aGF0IGFyZSB5b3UgbG9va2luZyBmb3IhJ10sXHJcbiAgICB0eXBlU3BlZWQ6IDEwMCxcclxuICAgIGJhY2tTcGVlZDogMTAwLFxyXG4gICAgLy8gbG9vcDogdHJ1ZSxcclxuICB9O1xyXG4gIFxyXG4gIHZhciB0eXBlZCA9IG5ldyBUeXBlZCgnLnR5cGVkX193b3JkcycsIG9wdGlvbnMpO1xyXG59IGNhdGNoIChlKSB7fVxyXG5cclxubGV0IHByZXZlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZXZlbnQnKTtcclxucHJldmVudHMuZm9yRWFjaChmdW5jdGlvbiAocHJldmVudCkge1xyXG4gIHByZXZlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnRyeSB7XHJcbiAgbGV0IGxlZnRfX2xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnRfX2xpbmtzJyk7XHJcbiAgbGV0IGNsaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xpY2tlcicpO1xyXG4gIGNsaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnLCBsZWZ0X19saW5rcyk7XHJcbiAgICBsZWZ0X19saW5rcy5jbGFzc0xpc3QudG9nZ2xlKCdvbicpO1xyXG4gIH0pO1xyXG59IGNhdGNoIChlKSB7fVxyXG5cclxudHJ5IHtcclxuICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlclwiLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAxMjAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgfSxcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgfSxcclxuICAgICAgNTc2OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5hcHBjTmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLmFwcGNQcmVjXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5pbXByZXNzaW9uc1N3aXBlclwiLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA1NzY6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLmFwcGNOZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIuYXBwY1ByZWNcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15SW1wcmVzc2lvblN3aXBlclwiLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICB9LFxyXG4gICAgICA1NzY6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLmFwcGNOZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIuYXBwY1ByZWNcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0gY2F0Y2ggKGUpIHt9XHJcblxyXG50cnkge1xyXG4gIGxldCBwZW9wbGVDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZW9wbGVDbG9zZScpO1xyXG4gIHBlb3BsZUNsb3NlLmZvckVhY2goZnVuY3Rpb24gKGNsb3NlX2J0bikge1xyXG4gICAgY2xvc2VfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnRhcmdldC5vZmZzZXRQYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgbGV0IHBlb3BsZVVzZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBlb3BsZVVzZXInKTtcclxuICBsZXQgcGVvcGxlc19fcmlnaHRfX2xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGVvcGxlc19fcmlnaHRfX2xpbmsnKTtcclxuICBwZW9wbGVVc2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICB1c2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwZW9wbGVzX19yaWdodF9fbGluay5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rKSB7XHJcbiAgICAgICAgaWYgKGxpbmsgIT0gdXNlci5vZmZzZXRQYXJlbnQpIHtcclxuICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB1c2VyLm9mZnNldFBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSBjYXRjaCAoZSkge31cclxuXHJcbnRyeSB7XHJcbiAgbGV0IHByb2R1Y3RzTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RzTmF2IGEnKTtcclxuICBwcm9kdWN0c05hdi5mb3JFYWNoKGZ1bmN0aW9uIChuYXYpIHtcclxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcHJvZHVjdHNOYXYuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xyXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSBjYXRjaCAoZSkge31cclxuXHJcbnRyeSB7XHJcbiAgbGV0IGNvbGFwc2VfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvb2xiYXIgLmNvbGFwc2UnKTtcclxuICBsZXQgY29sYXBzZV9tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhciB1bCcpO1xyXG4gIGNvbGFwc2VfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbGFwc2VfbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjb2xhcHNlJyk7XHJcbiAgfSk7XHJcbn0gY2F0Y2ggKGUpIHt9XHJcblxyXG50cnkge1xyXG4gIGxldCBteV9pbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXlfaW5wdXQnKTtcclxuICBteV9pbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XHJcbiAgICB9KTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJykuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlkZW8nKTtcclxuICBsZXQgdl9idG4gPSB2aWRlby5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcbiAgbGV0IHYgPSB2aWRlby5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xyXG4gIHZfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHYucGxheSgpO1xyXG4gICAgdi5jb250cm9scyA9IHRydWU7XHJcbiAgICB2X2J0bi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICB9KTtcclxufSBjYXRjaCAoZSkge30iXSwiZmlsZSI6Im15c2NyaXB0cy5qcyJ9