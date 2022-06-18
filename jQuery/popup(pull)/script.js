$(function () {
  // $(".banner>div>div").on("click", function () {
  //   $(".banner").hide();
  // });

  // document 클릭시 addEventListener()를 매개변수로 받고 click event 실행
  $(document).on("click", function (e) {
    if (e.target.className != "오복이_이미지") {
      $(".banner").hide();
    }
  });

});

// if (e.target.className == className) {
//   console.log("display == block")
// } else {
//   $(".banner").hide();
// }