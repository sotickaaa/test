var window_log = document.querySelector('.window_log')
var window_log2 = document.querySelector('.window_log2')

window.onload = function() {


  var swiper = new Swiper('.gramList', {
    loop : true,
    spaceBetween: 0,
    autoplay: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }); 



  var swiper = new Swiper('.gramScreenshot', {
    loop : true,
    autoplay: true,
    spaceBetween: 10,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }); 

  // setTimeout(function () {
	// window_log.style.display = 'block'
  // }, 10000)

}


function cancel () {
  window_log.style.display = 'none'
}

function install () {
  window_log2.style.display = 'block'
}

function cancelInstall () {
  window_log2.style.display = 'none'
}
