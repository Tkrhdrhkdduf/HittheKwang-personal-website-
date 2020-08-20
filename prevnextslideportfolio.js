/** this is the prev and next slide script
*
* 이것은 이전 버튼과 다음 버튼을 눌렀을 다음 슬라이드로 넘어가는 스크립트입니다
*
*
*

*
* moving slide can use all browser
*
*
* 모든 브라우져에서 슬라이드 넘어가는것은 가능
*
*
* however, smooth-scrolling only on Chrome on Pc 
* 
*
* 하지만 부드러운 애니메이션 효과는 Pc 에서는 크롬, edge, firefox, safari 가능
*
*
* Mobile: android Chrome , android samsung browser
*
*
*
* 모바일 에서는: 안드로이드 크롬, 삼성 브라우져 가능
*
*
* working on ios Safari and other ios mobile browser stay Tuned
*
*
*
* ios 사파리 브라우져와 다른 ios 모바일 브라우져 작업중 기달려주세요!
*
*
*
*
*
*/
/** chrome*/
$(function(){
    $('.s').each(function(){
        $(this).click(function(){
            event.preventDefault();
            var butType = $(this).text(), sNum = 5, sp = 800;

            if (butType == 'previous') {
                if ($('body').scrollLeft() == 0) {
                    $('body').stop().animate({scrollLeft: "+="+$('body').width() * (sNum - 1) +""}, sp);
                } else {
                    $('body').stop().animate({scrollLeft: "-="+$('body').width()+""}, sp);
                }
            } else if (butType == 'next') {
                if ($('body').scrollLeft() == ($('body').width() * (sNum - 1)).toFixed()) {
                    $('body').stop().animate({scrollLeft: "-="+$('body').width() * (sNum - 1) +""}, sp);
                } else {
                    $('body').stop().animate({scrollLeft: "+="+$('body').width()+""}, sp);
                }
            }
        });
    });
});
/** other browser */
$(function(){

    $('.s').each(function(){

        $(this).click(function(){

            var location = window.location.href.substr(window.location.href.indexOf('#')+1),

            INL = window.location.href.indexOf('#');

            

            

            butType = $(this).text(),

            locations = ['portfolio1','portfolio2','portfolio3','portfolio4','portfolio5'],

            point = 0;



            for (let i = 0; i < location.length; i++) {

                if (locations[i] == location || INL == -1) {

                    if (butType == 'previous') {

                        if (i == 0 || INL == -1) {

                            point = 4;

                        } else {

                            point = i - 1;

                        }



                    } else if (butType == 'next') {

                        if (i == 4) {

                            point = 0;

                        } else if (INL == -1) {

                            point = 1;

                        } else {

                            point = i + 1;

                        }

                    }

                }

            }

            window.location.replace('#'+locations[point]);

        });

    });

});
