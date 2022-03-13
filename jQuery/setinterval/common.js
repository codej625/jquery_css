// 전역변수 i 초기화
var i = 0;
// setInterval => 일정 시간마다 함수를 실행
var interval = setInterval(timer, 4000);

// .slider-li 클릭시 이벤트 실행
$('.slider-li').click(function () {
  // clearInterval를 사용하여 setInterval 중지
  clearInterval(interval);
  // 해당 선택된 요소의 index를 가져옴
  i = $(this).index();
  // 함수를 실행
  timer();
  // setInterval에 원하는 시간을 셋팅하고 재실행
  interval = setInterval(timer, 4000);
});

// a태그 스크롤 속도 설정
$('a').click(function () {
  // 정규식을 사용하여 replace할때 사용
  var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  var aHref = $.attr(this, 'href');
  if (aHref.length > 1 && aHref.indexOf('#') > -1) {
    var windowTop = $(window).scrollTop();
    var offsetTop = $('#' + aHref.substr(1).replace(regExp, '\\$&')).offset().top;
    var distance = Math.abs(windowTop - offsetTop);
    var calcSpeed = 50 * distance / 2000;
    var speed = calcSpeed < 300 ? 300 : (calcSpeed > 800 ? 800 : calcSpeed);
    $('html, body').animate({
      scrollTop: offsetTop
    }, speed, 'swing');
    return false;
  }
});

// top-btn 스크롤 속도 설정
$('#top-btn').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 400);
  return false;
});

// top-btn fadein 설정
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('#top-btn').fadeIn();
  } else {
    $('#top-btn').fadeOut();
  }
});

// img 반복 로직
function timer() {
  // 전역 변수 i에 삼항연산자로 값을 대입
  i = (i <= 2) ? i += 1 : 1;
  $('.slider-btn').attr('src', './img/btn_off.png');
  $('.slider-li').removeClass('active');

  // index는 0부터 시작하기 때문에 i에 최소값인 1에 -1을 대입
  $('.slider-ul > li').eq(i - 1).addClass('active');
  $('.slider-img').fadeOut('slow').attr('src', `./img/royal0${i}.png`).fadeIn('slow');
  $('.slider-btn').eq(i - 1).attr('src', './img/btn_on.png');
}