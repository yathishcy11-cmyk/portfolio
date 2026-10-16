(function($){"use strict";
(()=>{
  const hidePreloader=()=>{
    const p=document.querySelector(".preloader");
    if(!p || p.dataset.dismissed==="true") return;
    p.dataset.dismissed="true";
    p.classList.add("preloader-leaving");
    document.body.classList.remove("is-preloading");
    // Never let a failed animation library leave the page covered.
    window.setTimeout(()=>{p.style.display="none";p.setAttribute("aria-hidden","true");},750);
  };
  const start=()=>{
    const p=document.querySelector(".preloader");
    if(!p) return;
    document.body.classList.add("is-preloading");
    // A short minimum keeps the transition intentional, while the hard timeout
    // prevents an animation/library error from trapping the visitor.
    window.setTimeout(hidePreloader,450);
    window.setTimeout(hidePreloader,2200);
  };
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",start,{once:true});
  else start();
  window.addEventListener("pageshow",()=>window.setTimeout(hidePreloader,1000),{once:true});
})();
$(window).on('scroll',()=>$('.header').toggleClass('fixed-header',$(window).scrollTop()>=260));
$('.tw-offcanvas-open-btn').on('click',()=>$('.tw-offcanvas-2-area').addClass('opened'));
$('.tw-offcanvas-2-close-btn').on('click',()=>$('.tw-offcanvas-2-area').removeClass('opened'));
$('.tw-menu-bar').on('click',()=>{$('.twoffcanvas').addClass('opened');$('.body-overlay').addClass('apply')});
$('.close-btn,.body-overlay').on('click',()=>{$('.twoffcanvas').removeClass('opened');$('.body-overlay').removeClass('apply')});
if(window.AOS)AOS.init({once:false,offset:0,anchorPlacement:'top-bottom'});
$(window).on('scroll',()=>$('.back-to-top-wrapper').toggleClass('back-to-top-btn-show',$(window).scrollTop()>300));
$('#back_to_top').on('click',e=>{e.preventDefault();$('html,body').animate({scrollTop:0},300)});
if($.fn.magnificPopup)$('.open-popup').magnificPopup({type:'iframe',removalDelay:300,mainClass:'mfp-fade'});
if(window.PureCounter)new PureCounter();
$('.bg-img').each(function(){const img=$(this).data('background-image');if(img)$(this).css('background-image',`url('${img}')`)});
})(jQuery);
