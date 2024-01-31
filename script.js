const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
        delay: 5000, 
    }
  
  
  });

document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper', {
        // your Swiper configuration options here
    });

    // Change Swiper pagination color
    var paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
    var activeBullet = document.querySelector('.swiper-pagination-bullet-active');

    paginationBullets.forEach(function (bullet) {
        bullet.style.backgroundColor = '#BD2941';
    });

    if (activeBullet) {
        activeBullet.style.backgroundColor = '#C8102E';
    }
});

