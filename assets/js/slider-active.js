(function($){"use strict";if(!window.Swiper)return;
new Swiper('.brand-active',{slidesPerView:1,spaceBetween:30,loop:true,speed:2500,autoplay:true,breakpoints:{576:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:5},1600:{slidesPerView:6}}});
new Swiper('.testimonial-active',{slidesPerView:3,spaceBetween:10,autoplay:true,speed:1500,loop:true,navigation:{nextEl:'.slider-next',prevEl:'.slider-prev'},breakpoints:{0:{slidesPerView:1},992:{slidesPerView:2},1200:{slidesPerView:3}}});
new Swiper('.service-active',{slidesPerView:1,spaceBetween:30,loop:true,speed:3500,autoplay:true,pagination:{el:'#paginations',type:'custom',renderCustom:(s,c,t)=>`[${c}/${t}]`}});
new Swiper('.testimonial-three-active',{slidesPerView:2,spaceBetween:10,autoplay:true,speed:1500,loop:true,navigation:{nextEl:'.slider-next',prevEl:'.slider-prev'},breakpoints:{0:{slidesPerView:1},1200:{slidesPerView:2}}});
if($.fn.marquee&&$('.marquee_left').length)$('.marquee_left').marquee({speed:50,gap:0,duplicated:true,pauseOnHover:true,startVisible:true,direction:'left',loop:-1});
})(jQuery);
