
/**
 * mb animation
 * 
 * 
 * 
 * The hidden menu page appears when the menu bar button is pressed.
 * 
 * 
 * 
 * 
 * And if you press the menu bar button again, the effect disappears.
 * 
 * 
 * 
 * 
 * 메뉴바 버튼을 눌렀을시 숨겨져잇던 메뉴 페이지가 등장 
 * 
 * 
 * 
 * 그리고 다시 메뉴바 버튼을 눌럿을경우 사라지는 효과
 * 
 * 
 * 

 */
$(function() {
    $('.mb').on('click', function(event){
        event.preventDefault();
        $(this).toggleClass('active')
        $('.overlay').toggleClass('visible')
       
    });
});