/* array */
const navArray = ['건강', '암', '간편건강', '운전자', '어린이', '간병', '보장분석시스템'];
/* calc number */
const calcNum = 3;
/* nav number */
const navNum = 7;
/* html append variable */
let html;

function calcBox() {
    for (let  i = 0 ; i < calcNum ; i++) {
        html  = '<div class="calc-box">';
        html += '<div class="calc-top">';
        html += '<img src="images/picto01.png" />';
        html += '<h2> 잘 가입한<br /><span><strong>건강보험</strong></span> 하나로<br />100세까지 든든하게 !</h2>';
        html += '</div><div class="calc-middle">';
        html += '<p>W</p><input type="text" placeholder="보험료 계산" /></div>'
        html += '<a href="#">자세히 알아보기</a></div>';
        $('#calc_box').append(html);
    }
}
function headerNav() {
    for (let  i = 0 ; i < navNum ; i++) {
        html  = '<li><a href="#">' + navArray[i] + '</a></li>';
        $('#nav').append(html);
    }
}
$(document).ready(calcBox(), headerNav());
