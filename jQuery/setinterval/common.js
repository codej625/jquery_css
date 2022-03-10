$(function () {
    // 전역변수 i 초기화
    var i = 0;

    // .slider-li 클릭시 클릭 이벤트 실행
    var click = $('.slider-li').click(function () {
        // 선택한 index() + 1을 해서 사용 할 이미지와 이름을 맞춰줌
        var index = $(this).index() + 1;

        // .slider-btn 속성의 이미지를 변경해놓음
        $('.slider-btn').attr('src', './img/button_off.png');
        // .slider-li' 의 클래스를 미리 삭제
        $('.slider-li').removeClass('active');

        // .slider-img 의 이미지 경로를 위에서 맞춰놓은 index를 통해 변경
        $('.slider-img').attr('src', `./img/main0${index}.png`); // <- 위에서 선언한 var index 값을 사용
        // 직접 선택한 요소에 active class add 하여 css를 적용시킨다.
        $(this).addClass('active');
        // 직접 선택한 요소에 '.slider-btn'를 찾아서 이미지를 변경해준다.
        $(this).find('.slider-btn').attr('src', "./img/button_on.png");

        // index가 순서대로 진행되지 않을시 필요한 로직
        index = $(this).index() + 1;

        // index가 0이 아니면 전역변수 i에 index 대입
        if (index != 0) {
            i = index;
        }
    });

    // 자동 반복 로직
    setInterval(function () {
        // 전역 변수 i에 삼항연산자로 값을 대입
        i = i <= 2 ? i += 1 : 1;
        $('.slider-btn').attr('src', './img/button_off.png');
        $('.slider-li').removeClass('active');

        // index는 0부터 시작하기 때문에 i에 -1을 대입
        $('.slider-ul > li').eq(i - 1).addClass('active');
        $('.slider-img').attr('src', `./img/main0${i}.png`);
        $('.slider-btn').eq(i - 1).attr('src', './img/button_on.png');

        // 2초마다 함수 실행
    }, 2000);

});
