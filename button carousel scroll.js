/**
 * 
 * 
 * This javascript is when button click it scrolls horizontal
 * 
 * 
 * 
 * 
 * 이 자바스크립는 버튼을 눌렀을떄 가로로 스크롤 되는 기능입니다
 * 
 * 
 * 
 * 
 * 
 * 
 * its working very smooth on pc 
 * 
 * 
 * 아주 스무스하게 pc 에 돌아갑니다
 * 
 * 
 * 
 * 
 * keep working on edge browser!
 * 
 * 
 * 하지만 아직 엣지나 ie 브라우져 노력중!!
 */

const pos=document.querySelectorAll('.container');
let scroller=0;
butscroll();
function butscroll(n){
 
}
pos.forEach((interest, imgnum)=>{
    interest.addEventListener('click', ()=>{
        butscroll(scroller=imgnum);
    })
});
const contents=document.querySelector('.contents');

const prev= document.querySelector('.prev');
const next= document.querySelector('.next');


next.addEventListener('click', ()=>{
    contents.scrollLeft += pos[0].offsetWidth;

})
prev.addEventListener('click',()=>{
    contents.scrollLeft -= pos[0].offsetWidth;

})

const pos1=document.querySelectorAll('.container1');
let scroller1=0;
butscroll();
function butscroll(n){

}
pos.forEach((interest, imgnum)=>{
    interest=addEventListener('click', ()=>{
        butscroll(scroller1=imgnum);
    })
});
const contents1=document.querySelector('.contents1');
const prev1= document.querySelector('.prev1');
const next1= document.querySelector('.next1');
next1.addEventListener('click', ()=>{
    contents1.scrollLeft += pos[0].offsetWidth;
})
prev1.addEventListener('click',()=>{
    contents1.scrollLeft -= pos[0].offsetWidth;
})


const pos2=document.querySelectorAll('.container2');
let scroller2=0;
butscroll2();
function butscroll2(n){

}
pos2.forEach((interest2, imgnum2)=>{
    interest2.addEventListener('click', ()=>{
        butscroll2(scroller2=imgnum2);
    })
});
const contents2=document.querySelector('.contents2');
const prev2= document.querySelector('.prev2');
const next2= document.querySelector('.next2');
next2.addEventListener('click', ()=>{
    contents2.scrollLeft += pos2[0].offsetWidth;
})
prev2.addEventListener('click',()=>{
    contents2.scrollLeft -= pos2[0].offsetWidth;
})


const pos3=document.querySelectorAll('.container3');
let scroller3=0;
butscroll3();
function butscroll3(n){

}
pos3.forEach((interest3, imgnum3)=>{
    interest3.addEventListener('click', ()=>{
        butscroll3(scroller3=imgnum3);
    })
});
const contents3=document.querySelector('.contents3');
const prev3= document.querySelector('.prev3');
const next3= document.querySelector('.next3');
next3.addEventListener('click', ()=>{
    contents3.scrollLeft += pos3[0].offsetWidth;
})
prev3.addEventListener('click',()=>{
    contents3.scrollLeft -= pos3[0].offsetWidth;
})


const pos4=document.querySelectorAll('.container4');
let scroller4=0;
butscroll4();
function butscroll4(n){

}
pos4.forEach((interest4, imgnum4)=>{
    interest4.addEventListener('click', ()=>{
        butscroll4(scroller4=imgnum4);
    })
});
const contents4=document.querySelector('.contents4');
const prev4= document.querySelector('.prev4');
const next4= document.querySelector('.next4');
next4.addEventListener('click', ()=>{
    contents4.scrollLeft += pos4[0].offsetWidth;
})
prev4.addEventListener('click',()=>{
    contents4.scrollLeft -= pos4[0].offsetWidth;
})



const pos5=document.querySelectorAll('.container5');
let scroller5=0;
butscroll5();
function butscroll5(n){

}
pos5.forEach((interest5, imgnum5)=>{
    interest5.addEventListener('click', ()=>{
        butscroll5(scroller5=imgnum5);
    })
});
const contents5=document.querySelector('.contents5');
const prev5= document.querySelector('.prev5');
const next5= document.querySelector('.next5');
next5.addEventListener('click', ()=>{
    contents5.scrollLeft += pos5[0].offsetWidth;
})
prev5.addEventListener('click',()=>{
    contents5.scrollLeft -= pos5[0].offsetWidth;
})





